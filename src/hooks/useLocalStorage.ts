import { useState, useEffect } from 'react';
import { sanitizeForLog } from '@/lib/security';

// Function to revive Date objects from JSON
function reviveDates(obj: any): any {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(reviveDates);
  }

  const revived: any = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      // Check if it's a date-like string (ISO format)
      if (typeof value === 'string' &&
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value) &&
          !isNaN(Date.parse(value))) {
        revived[key] = new Date(value);
      } else if (typeof value === 'object') {
        revived[key] = reviveDates(value);
      } else {
        revived[key] = value;
      }
    }
  }

  return revived;
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Get from local storage then parse stored json or return initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window === 'undefined') {
        return initialValue;
      }
      const item = window.localStorage.getItem(key);
      return item ? reviveDates(JSON.parse(item)) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${sanitizeForLog(key)}":`, sanitizeForLog(error));
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      // Save state
      setStoredValue(valueToStore);

      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${sanitizeForLog(key)}":`, sanitizeForLog(error));
    }
  };

  return [storedValue, setValue] as const;
}

// Utility functions for localStorage management
export const localStorageUtils = {
  get: <T>(key: string, defaultValue: T): T => {
    try {
      if (typeof window === 'undefined') return defaultValue;
      const item = window.localStorage.getItem(key);
      if (!item) return defaultValue;

      const parsed = JSON.parse(item);
      return reviveDates(parsed);
    } catch {
      return defaultValue;
    }
  },

  set: <T>(key: string, value: T): void => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${sanitizeForLog(key)}":`, sanitizeForLog(error));
    }
  },

  remove: (key: string): void => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.error(`Error removing localStorage key "${sanitizeForLog(key)}":`, sanitizeForLog(error));
    }
  },

  clear: (): void => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.clear();
      }
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },

  getStorageSize: (): number => {
    try {
      if (typeof window === 'undefined') return 0;
      let total = 0;
      for (let key in window.localStorage) {
        if (window.localStorage.hasOwnProperty(key)) {
          total += window.localStorage[key].length + key.length;
        }
      }
      return total;
    } catch {
      return 0;
    }
  }
};
