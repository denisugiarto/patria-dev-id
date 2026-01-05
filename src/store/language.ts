export type Language = 'id' | 'en';

export const setLanguage = (lang: Language) => {
  if (typeof window !== 'undefined') {
    // Store in localStorage
    localStorage.setItem('language', lang);

    const currentPath = window.location.pathname;
    let newPath = currentPath;

    if (lang === 'en') {
      if (!currentPath.startsWith('/en')) {
        newPath = `/en${currentPath === '/' ? '' : currentPath}`;
      }
    } else {
      if (currentPath.startsWith('/en')) {
        newPath = currentPath.replace(/^\/en/, '') || '/';
      }
    }

    if (newPath !== currentPath) {
      window.location.href = newPath;
    }
  }
};

export const getCurrentLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    if (window.location.pathname.startsWith('/en')) {
      return 'en';
    }
  }
  return 'id';
};
