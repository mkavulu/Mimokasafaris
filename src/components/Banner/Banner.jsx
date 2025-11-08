import React from 'react'
import { Carousel } from 'react-bootstrap';
import sliderImg from "../../assets/images/lions.jpg"
import sliderImg1 from "../../assets/images/pic6.webp"
import "../Banner/banner.css"

const Banner = () => {
  return (
    <>
    <section className='slider'>
        <Carousel variant="dark">
      <Carousel.Item>
        <img src={sliderImg } className="d-block w-100" alt="First slide" />
        <Carousel.Caption>
            <div className="slider_des">
                <h5 className="heading">JOURNEY TO<span>  EXPLORE EAST AFRICA</span></h5>
                <p className="sub_text">
                    The Great Migration and Beyond </p>

            </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={sliderImg1 } className="d-block w-100" alt="First slide" />
        <Carousel.Caption>
          <div className="slider_des">
                <h5 className="heading">BEAUTIFUL PLACES<span> TO VISIT</span></h5>
                <p className="sub_text">
                    Unique places in East Africa To Visit For Beautiful Scenes  </p>
            </div>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
    
    </>
 
  )
}

export default Banner