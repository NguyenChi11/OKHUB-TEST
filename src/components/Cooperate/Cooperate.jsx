import React, { use, useState } from 'react';
import "./Cooperate.css"
import { assets } from '../../assets/assets'
import { characters } from '../../assets/assets'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



    const Cooperate = () => {

              useEffect(() => {
                  AOS.init({
                    duration: 1000,  
                    once: true,     
                  });
                }, []);
        const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);

        const handleChange = (event) => {
            const character = characters.find(char => char.name === event.target.value);
            setSelectedCharacter(character);
        };

        const [isZoomed, setIsZoomed] = useState(null)
        const handleClick = (index)=>{
            setIsZoomed(isZoomed === index ? null :index)
        }


        return (
        <div className='cooperate-container' data-aos="fade-up"
     data-aos-anchor-placement="center-center">
            <div className='cooperate'>
                <div className='cooperate-background'>
                    <div className='cooperate-bgr-left'>
                        <img className='cooperate-bgr-left-img' src={assets.bgr_cooperate} alt="" />
                    </div>
                    <div className='cooperate-bgr-right'></div>
                </div>
                <div className='cooperate-content-list-img'>
                    <div className='cooperate-content-list'>
                        <div className='cooperate-title-heading'>
                            <div className='cooperate-circle'></div>
                            <h4  className='cpr-title'>HỢP TÁC VỮNG BỀN</h4>
                        </div>
                        <p className='cooperate-title'>{selectedCharacter.content}</p>
                        <p className='cooperate-name'>{selectedCharacter.name}</p>
                        <p className='cooperate-regency'>{selectedCharacter.regency}</p>
                        <div className='cooperate-button-wrap'>
                            {characters.map((item,index)=>(
                                <button key={index} className={`cooperate-image-icon-list ${isZoomed === index ? 'item-container-active':''}`}  onClick={() => handleClick(index)}>
                                    <img value={item.name}  className='image-icon-item' src={item.imageIcon} onClick={() => setSelectedCharacter(item)} alt="" />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div >
                        <img className='cooperate-content-img' src={selectedCharacter.image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default Cooperate
