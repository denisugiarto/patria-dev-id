import { ui, defaultLang } from './ui';
import type { AstroGlobal } from 'astro';

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getLangFromRequest(request: AstroGlobal): keyof typeof ui {
  return getLangFromUrl(request.url);
}
