// Global type declarations
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'set' | 'event' | 'consent',
      targetId: string | {
        [key: string]: any;
      },
      config?: {
        [key: string]: any;
      }
    ) => void;
  }
}

export {};
