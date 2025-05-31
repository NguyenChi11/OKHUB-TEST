import React from 'react';
import "./Slider.css"
import { assets } from '../../assets/assets'
import { sliderList } from '../../assets/assets';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Slider = () => {

        useEffect(() => {
            AOS.init({
              duration: 1000,  
              once: true,     
            });
          }, []);
  
    return (
    
    <div className='slider-container-wrap'>
      <div className='slider-list'>
        <img className='background-slider' src={assets.background_slider} alt="" />
        <img className='background-slider-rep' src={assets.slider_rep} alt="" />
        <div className='slider-list-container'>
            <div className='slider-title-container'>
                <div className='slider-title'>
                    <div className='slider-circle'></div>
                    <h4 className='sl-title'>ĐỐI TÁC TIÊU BIỂU</h4>
                </div>
                <div className='slider-paragraph'>
                    <span className='highlight slider-highlight'>ĐỒNG HÀNH CÙNG AMI&M</span>
                </div>
            </div>
            <div className='slider-item' >
                {sliderList.concat(sliderList).map((icon,index)=>(
                    <img key={index} src={icon.image} alt="" className='slider-icon' />
                ))}
            </div>
        </div>
      </div>
      <div className='video-container'>
        <iframe className='video-container-iframe' src="https://www.youtube.com/embed/t7RSJ9rOILU?loop=1&showinfo=0&autohide=1&modestbranding=1&frameborder=0&enablejsapi=1&playlist=t7RSJ9rOILU&rel=0" frameborder="0"></iframe>
      </div>
    </div>
  )
}

export default Slider
