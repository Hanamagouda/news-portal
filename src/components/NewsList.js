

import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import { getNews } from '../services/newsService';
import './NewsList.css';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articles = await getNews();
        setNews(articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="NewsList">
      <h1>News</h1>
      <ul>
        {news.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
