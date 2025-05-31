import React, { useState } from 'react';
import "./OptionSection.css"
import { assets } from '../../assets/assets'
import { optionItem } from '../../assets/option'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const OptionSection = () => {

  useEffect(() => {
            AOS.init({
              duration: 1000,  
              once: true,     
            });
          }, []);

          
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const selectedItem = optionItem.find(
    (item, idx) => (item.index) === selectedIndex
  )||optionItem[1]

  return (
    <div className='option-section-wrap' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div className='option-section-container'>
            <div className='option-section-left'>
                <img className='option-background-left' src={assets.background_left} alt="" />
                <div className='option-section-content-left'>
                  <div className='option-title-heading'>
                    <div className='option-circle'></div>
                    <h4 className='otp-title'>LĨNH VỰC ĐẦU TƯ</h4>
                  </div>
                  <div className='option-title-left'>
                    <span className='highlight option-tlt-left'>
                      Ami&M là đối tác tư vấn - đầu tư bền vững, phát triển dịch vụ cao cấp và nâng tầm giáo dục trải nghiệm.
                    </span>
                  </div>
                  <p className='option-paragraph'>
                    Với hệ sinh thái tối ưu, Ami&M truyền cảm hứng xây dựng sự thịnh vượng đích thực cho những Người đồng hành và tạo lập di sản xứng tầm cho thế hệ tương lai. 
                  </p>
                  <div className='option-img-left-wrap'>
                    <img className='option-img-ellip' src={assets.ellip_left} alt="" />
                    <img className='option-img-left' src={assets.option_left} alt="" />
                  </div>
                </div>
            </div>
            <div className='option-section-right'>
              {optionItem.map((item,idx)=>(
                <div key={idx} className='option-section-right-item' onClick={() => handleClick(item.index)}>
                  <div className={`option-right-item_${item.index}`}>
                    <img src={item.image_layer} alt="" />
                  </div>
                </div>
              ))}
              <div className='option  -section-info'>
               {selectedItem ? (
                <div className='option-section-info-wrap'>
                <img className='option-background-right' src={selectedItem.image_option} alt="" />
                <img className='option-img-right' src={assets.ellip_right} alt="" />
                <div className='option-section-content-right'>
                  <img className='option-section-logo' src={selectedItem.image_layer} alt="" />
                  <p className='option-section-title-right'>{selectedItem.title}</p>
                  <button className='option-button-right'>
                    Tìm hiểu thêm
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
                </div>
                ) : (
                <div className='option-section-info-wrap'>
                  <img
                    className='option-background-right'
                    src={selectedItem.image_option}
                    alt=""
                  />
                  <img className='option-img-right' src={assets.ellip_right} alt="" />
                  <div className='option-section-content-right'>
                    <img
                      className='option-section-logo'
                      src={selectedItem.image_layer}
                      alt=""
                    />
                    <p className='option-section-title-right'>{selectedItem.title}</p>
                    <button className='option-button-right'>
                      Tìm hiểu thêm
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>

              )}
              </div>

              </div>

                {/* <img className='option-background-right' src={assets.background_right} alt="" />
                <img className='option-img-right' src={assets.ellip_right} alt="" />
                <img className='option-img-rep' src={assets.option_rep} alt="" />
                <div className='option-section-content-right'>
                  <img className='option-section-logo' src={assets.logo_1} alt="" />
                  <p className='option-section-heading-title'>CUNG CẤP DỊCH VỤ</p>
                  <p className='option-section-title-right'>Quản lý & Khai thác Tài sản, 
                    Chuỗi cơ sở lưu trú.</p>
                  <button className='option-button-right'>
                    Tìm hiểu thêm
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
                <div className='option-right-item_1'>
                  <img src={assets.layer_1} alt="" />
                </div>
                <div className='option-right-item_2'>
                  <img src={assets.layer_3} alt="" />
                </div>
                <div className='option-right-item_3'>
                  <img src={assets.layer_3} alt="" />
                </div>
                <div className='option-right-item_4'>
                  <img src={assets.layer_4} alt="" />
                </div>
                <div className='option-right-item_5'>
                  <img src={assets.layer_5} alt="" />
                </div> */}
            </div>
        </div>
  )
}

export default OptionSection
