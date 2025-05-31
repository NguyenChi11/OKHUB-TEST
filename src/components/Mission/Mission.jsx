import React from 'react'
import "./Mission.css";
import { assets } from '../../assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Mission = () => {
  useEffect(() => {
            AOS.init({
              duration: 1000,  
              once: true,     
            });
          }, []);
  return (
    <div className='mission-container' data-aos="fade-up"
     data-aos-duration="3000">
      <div className='mission-union'>
        <img className='img-union' src={assets.Union} alt="" />
      </div>
      <div className='mission-section-title'>
            <div className='mission-title'>
                <div className='mission-circle'></div>
                <h4  className='ms-title'>SỨ MỆNH</h4>
                <div className='mission-circle'></div>
            </div>
            <div className='mission-paragraph'>
                <span className="highlight mission-highlight"> Mang lại cuộc sống tốt đẹp hơn cho những người đồng hành </span>
            </div>
      </div>
      <div className='mission-content'> 
        <div className='mission-icon-content'>
            <div className='mission-icon-wrap'>
                <div className='mission-icon-item'>
                    <img className='mission-icon-img' src={assets.icon_1} alt="" />
                    <h3 className='mission-icon-title'>VỚI CÁN BỘ NHÂN VIÊN</h3>
                    <p className='mission-icon-paragraph'>Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát triển, khẳng định giá trị bản thân</p>
                </div>
                <div className='mission-icon-item'>
                    <img className='mission-icon-img' src={assets.icon_2} alt="" />
                    <h3 className='mission-icon-title'>VỚI KHÁCH HÀNG</h3>
                    <p className='mission-icon-paragraph'>Cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang đến cho khách hàng những trải nghiệm tốt nhất</p>
                </div>
                <div className='mission-icon-item'>
                    <img className='mission-icon-img' src={assets.icon_3} alt="" />
                    <h3 className='mission-icon-title'>VỚI ĐỐI TÁC</h3>
                    <p className='mission-icon-paragraph'>Tin tưởng và muốn hợp tác dài lâu trên nền tảng của sự phát triển bền vững và hướng tới những giá trị tốt đẹp</p>
                </div>
                <div className='mission-icon-item'>
                    <img className='mission-icon-img' src={assets.icon_4} alt="" />
                    <h3 className='mission-icon-title'>VỚI CỘNG ĐỒNG</h3>
                    <p className='mission-icon-paragraph'>Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, đóng góp tích cực cho các hoạt động hướng về cộng đồng</p>
                </div>
            </div>
            <div className='mission-img-wrap'>
                <img className='mission-img-item' src={assets.Item} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
