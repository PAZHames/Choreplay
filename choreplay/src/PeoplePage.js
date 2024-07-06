import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function PeoplePage () {
    
    const navigate = useNavigate(); 
    
    const navigateToGameChoicePage = () => {
        navigate('/gamechoice');
    };

    return (
        <div className="people-page-content">
<div className="people-page-header">
    <h1>People Page</h1>
</div>
<div className="actual-people">
    <h2>Player 1</h2>
    <h2>Player 1</h2>
    <h2>Player 1</h2>
    <h2>Player 1</h2>

</div>
<div className="button-for-game-page">
    <button onClick={navigateToGameChoicePage}>Go to game choice page</button>
</div>

        </div>
    )
}