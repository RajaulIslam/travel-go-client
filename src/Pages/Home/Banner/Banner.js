import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../images/banner/city.webp";
import banner2 from "../../../images/banner/family banner.jpg";
import banner3 from "../../../images/banner/mountain.jpg";



const Banner = () => {
    return (
        <div>
           <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block img-style w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='font-bold'>
                        <h3>Where the journey begins!</h3>
                        <p>Let us transport you with our highly affordable and reliable holiday packages</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img

                        className="d-block img-style w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className=''>
                        <h3>We know the right people</h3>
                        <p>Your imagination is your only limit with this new travel agency</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-style w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className=''>
                        <h3>Travel can open your mind</h3>
                        <p>You don’t choose where you go, the journey chooses you </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;