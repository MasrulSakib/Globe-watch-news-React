import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummary = ({ news }) => {
    const { _id, image_url, title, total_view, rating, details, author } = news;
    return (
        <div>
            <Card className='my-4'>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Image
                            roundedCircle
                            src={author.img}
                            style={{ height: '60px' }}
                        ></Image>
                        <div className='ms-2'>
                            <p className='mb-0'>{author.name}</p>
                            <p className='mb-0'>{author.published_date}</p>
                        </div>
                    </div>

                    <div>
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img
                        variant="top"
                        src={image_url} />
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <span>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read more</Link></span>
                                :
                                details
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center justify-content-between">
                    <div className='d-flex align-items-center'>
                        <FaStar className='text-warning'></FaStar>
                        <p className='mb-0 ms-2'> {rating.number}</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <FaEye></FaEye>
                        <span className='mb-0 ms-2'>{total_view}</span>
                    </div>

                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummary;