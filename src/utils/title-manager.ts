import titles from '../data/static-titles.json';

export interface PageTitle {
  id: string;
  text: {
    id: string;
    en: string;
    [key: string]: string;
  };
  metadata: {
    createdAt: string;
    updatedAt: string;
    author: string;
  };
}

export const getTitle = (id: string, lang: string = 'id'): string => {
  const titleData = titles.find((t) => t.id === id);
  if (!titleData) {
    console.warn(`Title with id '${id}' not found.`);
    return 'Patria Dev Community';
  }
  // @ts-ignore
  return titleData.text[lang] || titleData.text['id'] || 'Patria Dev Community';
};