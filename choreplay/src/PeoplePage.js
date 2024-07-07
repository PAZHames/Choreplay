import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './PeoplePage.css'; 


export default function PeoplePage () {
    
    const navigate = useNavigate(); 
    
    const navigateToGameChoicePage = () => {
        navigate('/gamechoice');
    };

    return (
        <div className="people-page-content">
            <div className='house-banner'>
            <img src="/Group 5.png" alt="it's me" className="image-size" />
            </div>

<div className='additional links'>

<img src="/Group 8.png" alt="it's me" className="image-size" width="50%" />
</div>
<div className="actual-people">
    <div className='phoebe'>
        <div className='phoebe-image'>
    <img src="/phoebe.png" alt="it's me" className="image-size" />
    </div>
    <div className='phoebe-name'>
    <p>Phoebe joined the game</p>
    </div>
    </div>
    <div className='grace'>
        <div className='grace-image'>
    <img src="/grace.png" alt="it's me" className="image-size" />
    </div>
    <div className='grace-name'>
    <p>Grace joined the game</p>
    </div>
    </div>

    <div className='grace'>
        <div className='nelli-image'>
    <img src="/nelli.png" alt="it's me" className="image-size" />
    </div>
    <div className='grace-name'>
    <p>Nelli joined the game</p>
    </div>
    </div>


</div>
<div className="button-for-game-page">
    <button onClick={navigateToGameChoicePage}>PLAY</button>
</div>

        </div>
    )
}