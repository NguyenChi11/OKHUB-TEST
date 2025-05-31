import React, { useEffect, useRef } from 'react';
import "./Slider.css"
import { assets } from '../../assets/assets'
import { sliderList } from '../../assets/assets';


const Slider = () => {
  
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
      <div className='slider-image-list'>
        <img className='slider-image' src={assets.image_slider} alt="" />
      </div>
    </div>
  )
}

export default Slider
