export type Language = 'id' | 'en';

export const setLanguage = (lang: Language) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('language', lang);
    // Set cookie for server-side reading
    document.cookie = `language=${lang}; path=/; max-age=31536000`; // 1 year
    // Force reload to update Astro server-rendered content
    window.location.reload();
  }
};

export const getCurrentLanguage = (): Language => {
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('language');
    if (saved === 'en' || saved === 'id') return saved;
  }
  return 'id';
};
