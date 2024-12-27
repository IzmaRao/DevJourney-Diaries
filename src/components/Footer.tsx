import React from 'react'
import { IoSendOutline } from "react-icons/io5";
import qrcode from '../../public/Qrcode 1.png';
import googleplay from '../../public/GooglePlay.png';
import appstore from '../../public/AppStore.png';
import Image from 'next/image';
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";


function Footer() {
  return (
    <div className='footer-main '>

      <div className='footer-section-one space-y-[24px]'>
        <h2 className='footer-section-one-h font-semibold'>DevJourney Diaries</h2>
        <p className='footer-section-one-p '>Embark on the adventure of a lifetime in the world of development.</p>
      </div>
      <div className='footer-section-two  space-y-6'>
        <h3 className='footer-section-two-h'>Support</h3>
        <div className='space-y-4'>
          <p className='footer-section-two-p'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <p className='footer-section-two-p'>devjourneydiaries@gmail.com</p>
          <p className='footer-section-two-p'>+88015-88888-9999</p>
        </div>
      </div>
      <div className='footer-section-four space-y-6'>
        <h3 className='footer-section-two-h'>Quick Link</h3>
        <div className='space-y-4'>
          <p className='footer-section-two-p'>Privacy Policy</p>
          <p className='footer-section-two-p'>Terms Of Use</p>
          <p className='footer-section-two-p'>FAQ</p>
        </div>
      </div>
      <div className='footer-section-two space-y-6'>
        <h3 className='footer-section-two-h'>Social Links</h3>
        <div className='flex gap-4 mt-4'>
          <RiFacebookLine size={22} />
          <CiTwitter size={22} />
          <FaInstagram size={22} />
          <RiLinkedinLine size={22} />
        </div>
      </div>

    </div>
  )
}

export default Footer;