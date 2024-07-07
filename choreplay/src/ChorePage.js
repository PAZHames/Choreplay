import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChorePage.css'; 

export default function ChorePage() {
    
    const navigate = useNavigate(); 


    const navigateToPeoplePage = () => {
        navigate('/chorelist'); // Navigate to PeoplePage
    };

    const [popupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
        setPopupOpen(!popupOpen);
    };


    return (
        <div className="chore-content">
            <div className="header">
                <h1>What don't you want to do?</h1>
            </div>

            <div className="image-container">
    <img onClick={navigateToPeoplePage} src="/Group 4.png" alt="it's me" className="image-size" />
    <img onClick={togglePopup} src="/icon.png" width="50" height="auto" alt="Exit button" className="exit-button" />
</div>
<div className="vertical-space"></div>
 



            <img onClick={navigateToPeoplePage} src="/Group 1.png" alt="it's me" className="image-size" width="100px" />
            <img onClick={navigateToPeoplePage} src="/Group 2.png" alt="it's me" className="image-size" />
            <img onClick={navigateToPeoplePage} src="/Group 3.png" alt="it's me" className="image-size" />

            {popupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        
                        <p>Who wants to argue about doing the dishes or taking out the trash, when you can simply play for it?</p>
                        <button onClick={togglePopup}>Close</button>
                    </div>
                </div>
            )}

        </div>
    );
}
