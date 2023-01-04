import React from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './style.css'
import one from '../imgs/1.jpg';
import two from '../imgs/2.jpg';
import three from '../imgs/3.jpg';


function Home() {
  return (
    <>
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={one}
          alt="slide1"
        />
        <Carousel.Caption>
          <h5>Find Your dream Job</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={two}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={three}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='container text-center text-white'>
      <div className='row justify-content-around'>
           <NavLink className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-2 nav-link link_color" to="/Jobs">Jobs</NavLink>
           <NavLink className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-2 nav-link link_color" to="/contact">Contact Us</NavLink>
           <NavLink className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-2 nav-link link_color" to="/comingsoon">Coming Soon</NavLink>
           </div>
    </div>
    </>
    );
};

export default Home;