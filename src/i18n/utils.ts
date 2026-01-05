import { ui, defaultLang } from './ui';
import type { AstroGlobal } from 'astro';

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

// For use in Astro components (server-side)
// We check cookies first, then fallback to default
export function getLangFromUrl(url: URL) {
  return defaultLang;
}

export function getLangFromRequest(request: AstroGlobal): keyof typeof ui {
  if (request.cookies.has('language')) {
    const lang = request.cookies.get('language')?.value;
    if (lang === 'en' || lang === 'id') {
      return lang;
    }
  }
  return defaultLang;
}
