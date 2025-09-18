/**
 * Security utilities for sanitizing user inputs
 */

/**
 * Sanitizes user input for logging to prevent log injection attacks
 * @param input - The user input to sanitize
 * @returns Sanitized string safe for logging
 */
export const sanitizeForLog = (input: unknown): string => {
  if (input === null || input === undefined) {
    return 'null';
  }
  
  const str = String(input);
  
  // Remove or encode dangerous characters that could break log integrity
  return str
    .replace(/\r\n/g, '\\r\\n')  // Replace CRLF
    .replace(/\r/g, '\\r')      // Replace CR
    .replace(/\n/g, '\\n')      // Replace LF
    .replace(/\t/g, '\\t')      // Replace tabs
    .replace(/[\x00-\x1f\x7f-\x9f]/g, ''); // Remove control characters
};

/**
 * Sanitizes HTML content to prevent XSS attacks
 * @param input - The HTML content to sanitize
 * @returns Sanitized HTML string
 */
export const sanitizeHtml = (input: string): string => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};