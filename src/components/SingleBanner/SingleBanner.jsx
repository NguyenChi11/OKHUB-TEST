import React from 'react'
import "./SingleBanner.css"
import { assets } from '../../assets/assets'


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SingleBanner = () => {

        useEffect(() => {
            AOS.init({
              duration: 1000,  
              once: true,     
            });
          }, []);
  return (
    <div className='SingleBanner-content'  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
      <img className='SingleBanner-img' src={assets.banner_1} alt="" />
      <div className='SingleBanner-paragraph-wrap'>
        <h3 className='SingleBanner-paragraph'>
            “Tình bằng hữu, sự chính trực và tinh thần 
            </h3>
        <h3 className='SingleBanner-paragraph'>
            tự nâng tầm hun đúc nên tinh thần của một tổ chức không ngừng học tập để kiến tạo giá trị.”
        </h3>
      </div>
      <img className='SingleBanner-layout' src={assets.layout_banner} alt="" />
    </div>
  )
}

export default SingleBanner
