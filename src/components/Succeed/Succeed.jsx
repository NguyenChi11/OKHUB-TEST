import React from 'react'
import "./Succeed.css"
import { assets } from '../../assets/assets'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Succeed = () => {
      useEffect(() => {
            AOS.init({
              duration: 1000,  
              once: true,     
            });
          }, []);
  return (
    <div className='succeed-container' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      <div className='succeed-container-left'>
        <div className='succeed-title-heading'>
          <div className='succeed-circle'></div>
          <h4 className='suc-title'>TỪNG BƯỚC PHÁT TRIỂN</h4>
        </div>
        <div className='succeed-title-left'>
          <span className='highlight succeed-tlt-left'>
            Dấu ấn Ami&M
          </span>
        </div>
        <p className='succeed-paragraph'>
          Những con số chỉ là một phần của câu chuyện, ý nghĩa thực sự là những dấu ấn sâu đậm về sự đổi mới, trách nhiệm xã hội và sự tin cậy từ những Người đồng hành.
        </p>
      </div>
      <div className='succeed-container-right'>
        <div className='succeed-item'>
          <div className='succeed-icon'><img className='succeed-icon-img' src={assets.icon_item_1} alt="" /></div>
          <div className='succeed-icon-content'>
            <h1 className='succeed-title-icon'>686 tỷ</h1>
            <p className='succeed-paragraph-icon'>Tổng tài sản và Vốn chủ sở hữu</p>
          </div>
        </div>
        <div className='succeed-item'>
          <div className='succeed-icon'><img className='succeed-icon-img' src={assets.icon_item_2} alt="" /></div>
          <div className='succeed-icon-content'>
            <h1 className='succeed-title-icon'>93,9 tỷ</h1>
            <p className='succeed-paragraph-icon'>Doanh thu thuần</p>
          </div>
        </div>
        <div className='succeed-item'>
          <div className='succeed-icon'><img className='succeed-icon-img' src={assets.icon_item_3} alt="" /></div>
          <div className='succeed-icon-content'>
            <h1 className='succeed-title-icon'>24,6 tỷ</h1>
            <p className='succeed-paragraph-icon'>Lợi nhuận gộp</p>
          </div>
        </div>
        <div className='succeed-item'>
          <div className='succeed-icon'><img className='succeed-icon-img' src={assets.icon_item_4} alt="" /></div>
          <div className='succeed-icon-content'>
            <h1 className='succeed-title-icon'>20+</h1>
            <p className='succeed-paragraph-icon'>Dự án trọng điểm</p>
          </div>
        </div>
        <div className='succeed-item'>
          <div className='succeed-icon'><img className='succeed-icon-img' src={assets.icon_item_5} alt="" /></div>
          <div className='succeed-icon-content'>
            <h1 className='succeed-title-icon'>03 văn phòng</h1>
            <p className='succeed-paragraph-icon'>Trên các tỉnh thành</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Succeed
