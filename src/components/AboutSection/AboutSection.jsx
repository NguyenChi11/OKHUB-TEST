import React from 'react';
import "./AboutSection.css";
import { assets } from '../../assets/assets';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AboutSection = () => {

      useEffect(() => {
          AOS.init({
            duration: 1000,  
            once: true,     
          });
        }, []);
  
  return (
    <div className='about-section' data-aos="zoom-in-down">
      <div className='about-section-img'>
          <div className='circle-red'></div>
          <div className='circle-green'></div>
          <div className='circle-white'></div>
          <div className='about-section-content'> 
            <div className='about-section-title'>
              <h4 className='aboutSection-heading'>CÔNG TY CỔ PHẦN TẬP ĐOÀN AMI&M VIỆT NAM</h4>
              <h2 className='aboutSection-title'>KHỞI NGUỒN TỪ TÌNH BẰNG HỮU</h2>
              <p className='aboutSection-paragraph'>Bắt đầu từ năm 2005 – thời điểm những người bạn cùng chung chí hướng chia sẻ những ý tưởng đầu tiên về AMITICAS, cùng nhau nỗ lực không ngừng nghỉ để đến 9.9.2019, Ami&M chính thức đi vào hoạt động.</p>
              <span className='aboutSection-paragraphh'>Tại Ami&M, chúng tôi được sống và làm việc hết mình!</span>
              <p className='aboutSection-paragraph'>Được gắn bó và kết nối cũng những người bằng hữu mà chúng tôi gọi là ANH EM - AM, được bứt phá các giới hạn bản thân để phát triển, thoả sức thử thách và gắn bó nhiệt thành để cùng nhau kiến tạo các giá trị mà mình tin tưởng.</p>
            </div>
            <div className='about-btn'>
              <button className='about-section-btn'>
              HÀNH TRÌNH CỦA AMI&M
              <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
            <div className='vector'>
              <img className='image-vector' src={assets.VectorAboutSection} alt="Vector" />
            </div>
      </div>
    </div>
  )
}

export default AboutSection
