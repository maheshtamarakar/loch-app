import React from 'react'
import './style.css'

const TestimonialCard = ({data}) => {
  return (
    <div className='testimonial_card'>
      <div className="testimonial__header">
      {data?.name} <span>{data?.position}</span>
      </div>
      <p>“{data?.content}</p>
    </div>
  )
}

export default TestimonialCard
