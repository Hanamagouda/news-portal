

const API_KEY = 'a8c3c23fc8aa4592b262051bb24d69bc';

export const getNews = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    throw new Error('Error fetching news:', error);
  }
};
