import React from 'react'
import Image from 'next/image'
import overly from '../../public/Rectangle 14.png'

export default function About() {
  return (
    <div className='about  space-y-10 rounded'>
      
      <h1 className='about-head'>About Us</h1>
      <div className='about-section-one'>
        <div className='space-y-10'>

          <div className='space-y-4'>
            <h2 className='about-h text-[#0D0D0D]'>DevJourney Diaries</h2>
            <p className='about-p text-[#151515]'>Welcome to DevJourney Diaries, your ultimate destination for insightful content on web development and technology. Our mission is to educate, inspire, and build a community of</p>
          </div>

          <div className='space-y-4'>
            <h3 className='about-story text-[#0D0D0D]'>Our Story</h3> 
            <p className='about-story-p text-[#151515]'>DevJourney Diaries was founded in 2020 with a vision to create a platform where developers could share their experiences and learn from each other. Since then, we have grown into a vibrant community of like-minded individuals.</p>
          </div>

        </div>


        <Image className='about-img' src={overly} alt='work'/> 
      </div> 

      <div className='about-section-two  space-y-10'>
      <div className='space-y-4'>
        <h3 className="about-story text-[#0D0D0D]">Achievements</h3> 
        <p className='about-story-p text-[#151515]'>We are proud to have been recognized for our contributions to the developer community with numerous awards and accolades.</p> 
      </div>
      
      <div className='space-y-4'>
        <h3 className="about-story text-[#0D0D0D]">Testimonials</h3> 
        <p className='about-story-p text-[#151515]'>&quot;DevJourney Diaries has been an invaluable resource in my learning journey. The content is top-notch and the community is incredibly supportive.&quot; - Happy Reader</p> 
      </div>
      
      
      <div className='space-y-4'>
        <h3 className="about-story text-[#0D0D0D]">Get in Touch</h3> 
        <p className='about-story-p text-[#151515]'>We&apos;d love to hear from you! Follow us on social media, subscribe to our newsletter, or reach out through our contact form.</p>
      </div>
      
      </div>    
    </div>
  )
}
