import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { FaArrowLeft, FaStar } from 'react-icons/fa';

const News = () => {
    const fullNews = useLoaderData();
    const { image_url, title, rating, details, author, category_id } = fullNews;
    return (
        <div>
            <Card>
                <Card.Img
                    variant="top"
                    src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <div className='d-flex align-items-center justify-content-between fw-bolder my-4'>
                            <span>Author: {author.name}</span>
                            <span>Published date: {author.published_date}</span>
                            <span className='d-flex align-items-center'>
                                <FaStar className='text-warning'></FaStar>
                                <span className='mb-0 ms-2'>{rating.number}</span>
                            </span>
                        </div>
                        <div>
                            <span>{details}</span>
                        </div>
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary" className='d-flex align-items-center gap-2'><FaArrowLeft></FaArrowLeft> Back to category news</Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default News;