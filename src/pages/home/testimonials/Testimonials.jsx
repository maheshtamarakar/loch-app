import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import TestimonialCard from '../../../components/testimonials_card/TestimonialCard'
import logo from '../../../assets/logo.svg'

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([])
  const slider = useRef(null);
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  useEffect(() => {
    setTestimonialsData([
      {
        id: 1,
        name: 'Jack F',
        position: 'Ex Blackrock PM',
        content: '“Love how Loch integrates portfolio analytics and whale watching into one unified app.”'
      },
      {
        id: 2,
        name: 'Yash P',
        position: 'Research, 3poch Crypto Hedge Fund',
        content: '“I use Loch everyday now. I dont think I could analyze crypto whale trends markets without it. Im addicted!”'
      },
      {
        id: 3,
        name: 'Jack F',
        position: 'Ex Blackrock PM',
        content: '“Love how Loch integrates portfolio analytics and whale watching into one unified app.”'
      },
      {
        id: 4,
        name: 'Yash P',
        position: 'Research, 3poch Crypto Hedge Fund',
        content: '“I use Loch everyday now. I dont think I could analyze crypto whale trends markets without it. Im addicted!”'
      },
      {
        id: 5,
        name: 'Jack F',
        position: 'Ex Blackrock PM',
        content: '“Love how Loch integrates portfolio analytics and whale watching into one unified app.”'
      },
      {
        id: 6,
        name: 'Yash P',
        position: 'Research, 3poch Crypto Hedge Fund',
        content: '“I use Loch everyday now. I dont think I could analyze crypto whale trends markets without it. Im addicted!”'
      },
      {
        id: 7,
        name: 'Jack F',
        position: 'Ex Blackrock PM',
        content: '“Love how Loch integrates portfolio analytics and whale watching into one unified app.”'
      },
      {
        id: 8,
        name: 'Yash P',
        position: 'Research, 3poch Crypto Hedge Fund',
        content: '“I use Loch everyday now. I dont think I could analyze crypto whale trends markets without it. Im addicted!”'
      },
    ])
  }, [])
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
            {testimonialsData.length > 0 && 
            testimonialsData?.map((data) => (
              <TestimonialCard data={data}/>
            ))
            }
        </div>
      </div>
    </div>
  )
}

export default Testimonials
