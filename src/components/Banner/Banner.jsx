import React from 'react';
import { useState } from 'react';
import "./Banner.css";
import { assets } from "../../assets/assets.js";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Banner = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,  
          once: true,     
        });
      }, []);

    const [selectedLanguage, setSelectedLanguage] = useState('VIE');
    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };
  return (
    <div className='banner' data-aos="fade-up-right">
        <div className='banner-content'>
            <div className='banner-logo'>
                <img className='banner-logo-image' src={assets.logo} alt="Logo AMI&M"/>
            </div>
            <div className="buttons">
                <div className='button-language'>
                    <button className={`btn-language ${selectedLanguage === 'VIE' ? 'active' : ''}`} 
                            onClick={() => handleLanguageChange('VIE')}>VIE</button>
                    <button className={`btn-language ${selectedLanguage === 'ENG' ? 'active' : ''}`} 
                            onClick={() => handleLanguageChange('ENG')}>ENG</button>
                </div>
                <div className='button-menu'>
                    <button className='btn-menu'>MENU</button>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
            <div className='banner-content-paragraph-heading'>
                <h2 className='banner-content-paragraph-title' >Đồng hành khởi thịnh vượng!</h2>
            </div>
        </div>
    </div>
  )
}

export default Banner
