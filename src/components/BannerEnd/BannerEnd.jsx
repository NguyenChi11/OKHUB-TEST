import React from 'react'
import "./BannerEnd.css"
import { assets } from '../../assets/assets'

const BannerEnd = () => {
  return (
    <div className='bannerEnd-container-wrap'>
        <img className='bannerEnd-image' src={assets.banner_end} alt="" />
        <div className='bannerEnd-content'>
            <div className='BannerEnd-title-heading'>
              <div className='Banner-circle'></div>
              <h4 className='Bn-title'>DANH SÁCH TIN TỨC</h4>
              <div className='Banner-circle'></div>
            </div>
            <div className='banner-end-title-wrap'>
                <span className='highlight banner-end-title'>Chào đón bạn trở thành Người đồng hành tiếp theo!</span>
            </div>
            <p className='banner-end-paragraph'>
                Bạn thích một môi trường làm việc năng động, sáng tạo và gắn kết?
                Hãy ứng tuyển để trở thành thành viên trong gia đình Ami&M!
            </p>
            <button className='banner-end-button'>
                Cơ hội tìm việc làm
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
  )
}

export default BannerEnd
