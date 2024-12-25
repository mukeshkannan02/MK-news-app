import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems';

export function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    console.log(`Fetching news from: ${url}`);

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching articles:", error);
        setError(error);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading news: {error.message}</div>;
  }

  return (
    <div className="text-center">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {Array.isArray(articles) &&
        articles.map((news, index) => (
          <NewsItems
            key={index}
            title={news.title}
            description={news.description}
            url={news.url}
            src={news.urlToImage}
          />
        ))}
    </div>
  );
}
