import React, { useState } from 'react';
import "./Cooperate.css"
import { assets } from '../../assets/assets'
import { characters } from '../../assets/assets'



    const Cooperate = () => {
        const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);

        const handleChange = (event) => {
            const character = characters.find(char => char.name === event.target.value);
            setSelectedCharacter(character);
    };


        return (
        <div className='cooperate-container'>
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
                        <div className='cooperate-image-icon-list'>
                            {characters.map((item)=>(
                                <img key={item.name} value={item.name}  className='image-icon-item' src={item.imageIcon} onClick={() => setSelectedCharacter(item)} alt="" />
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
