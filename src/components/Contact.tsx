import React from 'react'
import { FaClock, FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

export default function Contact() {
  return (
    <div>
      <div className='contact'>

        <div className="contact-section-one">
          <h2 className="contact-section-one-h">Get In Touch With Us</h2>
          <p className="contact-section-one-p">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>

        <div className='contact-section-two'>

          <div className='contact-div-one space-y-[42px]'>
            <div className='contact-one'>
              <p className='contact-one-p font-medium'><FaLocationDot size={20} /><span>Addrees</span></p>
              <p className='conatct-one-pp text-[#151515]'>236 5th SE Avenue, New York NY10000, United States</p>
            </div>

            <div className='contact-one'>
              <p className='contact-one-p font-medium'><FaPhoneAlt size={20} /><span>Phone</span></p>
              <p className='conatct-one-pp text-[#151515]'>Mobile: +(84) 546-6789</p>
              <p className='conatct-one-pp text-[#151515]'>Hotline: +(84) 456-6789</p>
            </div>

            <div className='contact-one'>
              <p className='contact-one-p font-medium'><FaClock size={20} /><span>Working Time</span></p>
              <p className='conatct-one-pp text-[#151515]'>Monday-Friday: 9:00 - 22:00</p>
              <p className='conatct-one-pp text-[#151515]'>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>

          <form className='contact-form space-y-[36px]' action="">

            <div>
              <p className='contact-form-input-name-p   font-medium'>Your Name</p>
              <input placeholder='Abc' className='contact-form-input-name text-[#593A27]' type="text" />
            </div>
            <div>
              <p className='contact-form-input-name-p  font-medium'>Email Address</p>
              <input placeholder='Abc@def.com' className='contact-form-input-name text-[#593A27]' type="email" />
            </div>
            <div>
              <p className='contact-form-input-name-p  font-medium'>Subject</p>
              <input placeholder='This is an optional' className='contact-form-input-name text-[#593A27]' type="text" />
            </div>
            <div>
              <p className='contact-form-input-name-p  font-medium'>Message</p>
              <input placeholder="Hi i'do like to ask about" className='contact-form-comment-name text-[#593A27]' type="comment" />
            </div>
            <div className='contact-btn'>
              <button className='contact-form-btn-one rounded-[15px] '>Submit</button>
            </div>
          </form>

        </div>

      </div>
    </div>
  )
}
