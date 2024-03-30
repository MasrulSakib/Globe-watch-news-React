import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../Shared/NewsSummaryCard/NewsSummary';

const Category = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>Total news in this category: {allNews.length}</h2>
            {
                allNews.map(news => <NewsSummary
                    key={news._id}
                    news={news}
                ></NewsSummary>)
            }
        </div>
    );
};

export default Category;