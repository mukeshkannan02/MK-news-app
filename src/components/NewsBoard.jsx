import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems';


export function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    console.log(`Fetching news from: https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`);
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, [category]
  );

  return (
    <div className="text-center ">
      <h2 className='text-center'>latest<span className='badge bg-danger'>news</span></h2>
      {articles.map((news, index) => {
        return <NewsItems key={index} title={news.title} description={news.description} url={news.url} src={news.urlToImage} />;
      })}
    </div>
  );

}


