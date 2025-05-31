import React, { useState } from 'react';
import "./NewsSection.css"
import { assets } from '../../assets/assets'
import { newsItems } from "../../assets/newsItem"

const NewsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        if (currentIndex + itemsPerPage < newsItems.length) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const visibleItems = newsItems.slice(currentIndex, currentIndex + itemsPerPage);
  return (
    <div className='NewsSection-container-wrap'>
      <div className='NewsSection-container'>
        <div className='NewsSection-fame-1'>
          <img src={assets.fame1} alt="" />
        </div>
        <div className='NewsSection-fame-2'>
          <img src={assets.fame2} alt="" />
        </div>
        <div className='NewsSection-content-container'>
          <div className='NewsSection-content-wrap'>
            <div className='NewsSection-title-heading'>
              <div className='NewsSection-circle'></div>
              <h4 className='Ns-title'>DANH SÁCH TIN TỨC</h4>
            </div>
            <h2 className='NewsSection-title'>Có gì mới tại Ami&M?</h2>
            <p className='NewsSection-paragraph'>Ami&M, viết tắt của Amity and More Tình bằng hữu và hơn thế nữa chính là cái tên và cũng là sự khẳng định cho tôn chỉ mà chúng tôi luôn tâm niệm.</p>
            <div className='Ns-btn'>
              <button className='Ns-section-btn'>
                XEM CHI TIẾT
              <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className='NewsSection-item-list-wrap'>
            <img className='News-arr-left' src={assets.arr_left} alt=""  onClick={handlePrev}/>
            <div className='News-items'>{visibleItems.map((item,index)=>(
              <div className='News-item' key={index}>
                <img src={item.image} className='News-item-image' alt="" />
                <div className='News-title-content-wrap'>
                  <h3 className='News-item-title'>{item.title}</h3>
                  <p className='News-item-date'>{item.date}</p>
                </div>
                <p className='News-item-tag'>Nổi Bật</p>
              </div>
            ))}</div>
            <img className='News-arr-right' src={assets.arr_right} alt="" onClick={handleNext}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsSection
