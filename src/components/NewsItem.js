
import React from 'react';
import './NewsItem.css';

const NewsItem = ({ article }) => {
  return (
    <li className="list-group-item NewsItem">
      <h3>{article.title}</h3>
      <p>{article.description}</p>
    
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Read More
      </a>
    </li>
  );
};

export default NewsItem;
