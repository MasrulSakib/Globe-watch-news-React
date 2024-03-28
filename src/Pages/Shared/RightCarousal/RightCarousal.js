import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../../Assets/Brand/Brand1.png'
import brand2 from '../../../Assets/Brand/Brand2.png'


const RightCarousal = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>

                    <img
                        className='d-block w-100 img-thumbnail'
                        src={brand1}
                        alt="brand1" />

                </Carousel.Item>
                <Carousel.Item interval={500}>

                    <img
                        className='d-block w-100 img-thumbnail'
                        src={brand2}
                        alt="brand2" />

                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default RightCarousal;