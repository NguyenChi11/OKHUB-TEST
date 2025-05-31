import React from 'react'
import "./GlobalSection.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const GlobalSection = () => {
  useEffect(() => {
            AOS.init({
              duration: 1000,  
              once: true,     
            });
          }, []);
  return (
    <div className='global' data-aos="zoom-out-left">
        <div className='global-section'>
            <div className='global-title'>
                <div className='global-circle'></div>
                <h4  className='glb-title'>TẦM NHÌN</h4>
                <div className='global-circle'></div>
            </div>
            <div className='global-paragraph'>
                <h2 className='glb-paragraph'>Ami&M xây dựng 
                <span className="highlight"> hệ sinh thái đa ngành phát triển nhanh và bền vững </span>
                trên hành trình kiến tạo sự thích vượng đích thực
                </h2>
            </div>
        </div>
    </div>
  )
}

export default GlobalSection
