import React from 'react'
import SignUp from '../../components/signup/SignUp'
import './style.css'
import NotificationSection from './get_notification_section/NotificationSection'
import WatchWhale from './watch_whale_section/WatchWhale'
import Testimonials from './testimonials/Testimonials'

const Home = () => {
  return (
    <div className='home__main'>
      <div className="content">
        <NotificationSection/>
        <WatchWhale/>
        <Testimonials/>
      </div>
      <SignUp/>
    </div>
  )
}

export default Home
