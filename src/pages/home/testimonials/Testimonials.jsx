import React, { useRef, useState } from 'react'
import './style.css'
import TestimonialCard from '../../../components/testimonials_card/TestimonialCard'
import logo from '../../../assets/logo.svg'

const Testimonials = () => {
  const slider = useRef(null);
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const handleMouseDown = (e) => {
    setIsDown(true);
    let startXvalue = e.pageX - slider.current.offsetLeft;// margin value
    setStartX(startXvalue);
    setScrollLeft(slider.current.scrollLeft);
  }
  const handleMouseLeave = (e) => {
    setIsDown(false);
  }
  const handleMouseUp = (e) => {
    setIsDown(false);
  }
  const handleMouseMove = (e) => {
    if(!isDown) return; // stop the func from running
    e.preventDefault();
    const x = e.pageX - slider.current.offsetLeft;
    console.log({x, startX});
    const walk = x - startX;
    slider.current.scrollLeft = scrollLeft - walk;
  }
  return (
    <div className='testimonial__container'>
      <div className="testimonials__header">
        <p>Testimonials</p>
        <hr />
      </div>
      <div className="testimonials">
        <div className="logo_testimonial">
            <img src={logo} alt="" />
        </div>
        <div 
          className={`testimonials_cards ${isDown? 'active' : ''}`}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          ref={slider}
          >
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
