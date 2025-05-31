import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {

          useEffect(() => {
              AOS.init({
                duration: 1000,  
                once: true,     
              });
            }, []);
  return (
    <div className='footer-container-wrap' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <div className='footer-container'>
        <div className='footer-1'>
            <img className='footer-logo' src={assets.footerlogo} alt="" />
            <div className='footer-sign-wrap'>
                <div className='footer-sign-title'>Đăng ký nhận thông tin từ Ami&M</div>
                <input className='footer-sign-input' type="text" placeholder='Nhập Email của bạn' />
                <button className='footer-sign-button'>
                    Đăng Ký 
                </button>
            </div>
        </div>
        <div className='footer-2'>
            <div className='footer-tag-1'>
                <p className='title-tag'>Khám phá</p>
                <p className='footer-tag'>Trang chủ</p>
                <p className='footer-tag'>Giới thiệu</p>
                <p className='footer-tag'>Từ điển Ami&M</p>
                <p className='footer-tag'>Tuyển dụng</p>
                <p className='footer-tag'>Tin tức</p>
            </div>
            <div className='footer-tag-1'>
                <p className='title-tag'>Mạng xã hội</p>
                <p className="footer-tag">Linkedin</p>
                <p className="footer-tag">Facebook</p>
                <p className="footer-tag">Youtube</p>
            </div>
        </div>
        <div className='footer-3'>
            <div className='footer-tag-3'>
                <p className='title-tag title-tag-address'>Liên Hệ</p>
                <div className='footer-contact'>
                    <p className='contact-title'>Địa chỉ</p>
                    <p className='contact-content'>Số 14 phố Đỗ Hành, phường Nguyễn Du, quận Hai Bà Trưng, thành phố Hà Nội </p>
                </div>
                <div className='email-phone-wrap'>
                    <div className='footer-contact'>
                        <p className='contact-title'>Điện thoại</p>
                        <p className='contact-content'>(+84) 243 201 2889</p>
                    </div>
                    <div className='footer-contact'>
                        <p className='contact-title'>Email</p>
                        <p className='contact-content'>Info@amigroup.com.vn </p>
                    </div>
                </div>
                <div className='footer-contact'>
                    <p className='contact-title'>Website</p>
                    <p className='contact-content'>amigroup.com.vn </p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
