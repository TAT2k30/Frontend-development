import React, { useContext, useEffect, useState } from 'react';
import './PopupImage.scss';

import axios from 'axios';
import { baseUrl } from '../../../../Assets/Data/baseUrl';
import { DataContext } from '../../../../Assets/Data/DataContext';

function PopupImage({handleInputPhoto,showPopup,onClose}) {
    const [userImg, setUserImg] = useState([]);
    const { token } = useContext(DataContext);
    useEffect(() => {
        const getAllUserImg = async () => {
            const response = await axios.post(`${baseUrl}/Image/${token.UserId}`);
            setUserImg(response.data.data.$values);
        }
        getAllUserImg();
    }, [])
    if (!showPopup) {
        return null;
    }
    return (
        <div className='popup-overlay'>
            <div className='popup-content'>

                <div className='popup-close' onClick={onClose}>
                    Close
                    &times;
                </div>

                {userImg.map((img, index) => (
                  <img key={index} src={img.imageUrl} alt={`User Image ${index + 1}`} className='img-thumbnail' onClick={()=>{handleInputPhoto(img.imageUrl)}} />
                ))}

            </div>
        </div>
    );
}

export default PopupImage;
