import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftItems = () => {
    const [categories, getCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
            .then(res => res.json())
            .then(data => getCategories(data));
    }, [])

    return (
        <div>
            <h5 className='fw-bold'>All category</h5>
            {
                categories.map(category =>
                    <p key={category.id} >
                        <Link className='text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>
                )
            }
        </div >
    );
};

export default LeftItems;