import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./slider.css"
import { NavLink } from 'react-router-dom';


const data = [
    {
        image: require('../../images/slider1.jpg'),
        caption: `Frontend Developer Conference`,
        button: "Buy Ticket",
        link: "/ticket"
    },
    {
        image: require('../../images/slider2.jpg'),
        caption: "Frontend Developer Conference",
        button: "Buy Ticket",
        link: "/ticket"
    },

]



function Bgslider() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const current = new Date();
    const day = `${current.getDate()}`
    const month = `${current.getMonth() + 1}`
    const year = `${current.getFullYear()}`;
    return (
        <div className='bgSlider'>

            <Carousel activeIndex={index} onSelect={handleSelect}>
                {data.map((slide, i) => {
                    return (
                        <Carousel.Item className="carouselItem" key={i}>

                            <img
                                src={slide.image}
                                alt="sliderimage"
                                className="sliderImage"
                            />
                            {/* <Navbar homeNavbg="true" /> */}
                            <Carousel.Caption className="carousel-content">
                                <h1>{slide.caption}</h1>

                                <NavLink to={slide.link} className="nav-button btn">
                                    {slide.button}
                                </NavLink>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}

            </Carousel>

            <div className='date-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-2 col-sm-12'>
                            <div className=''>
                                <div className='today'>Today's Date</div>
                                <div className='text'>COUNT EVERY SECOND UNTIL THE EVENT</div>
                            </div>
                        </div>
                        <div className='col-lg-9 col-md-10 col-sm-12'>
                            <div className='content'>
                                <div className='eachDate'>{day} <span>Day</span></div>
                                <div className='eachDate'>{month} <span>Months</span></div>
                                <div className='eachDate'>{year} <span>Year</span></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Bgslider