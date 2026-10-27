/**
 * Safe LocalStorage abstraction for iframe sandboxes and restricted privacy environments
 */

export function safeGetItem(key: string): string | null {
  try {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      return window.localStorage.getItem(key);
    }
  } catch (e) {
    // Storage access denied in restricted iframe or private mode
    return null;
  }
  return null;
}

export function safeSetItem(key: string, value: string): boolean {
  try {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      window.localStorage.setItem(key, value);
      return true;
    }
  } catch (e) {
    // Storage access denied
    return false;
  }
  return false;
}
