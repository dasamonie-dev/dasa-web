export const ANDROID_STORE_URL =
  'https://play.google.com/store/search?q=dasamonie+finance&c=apps';
export const IOS_STORE_URL =
  'https://apps.apple.com/us/app/dasamonie/id6751965193';

export const APP_REDIRECT_DELAY_MS = 1200;

export type Platform = 'ios' | 'android' | 'other';

export function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'other';
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  if (/Android/i.test(ua)) return 'android';
  return 'other';
}
