import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChorePage.css';

export default function ChorePage() {
    const [clickedChores, setClickedChores] = useState([]);
    const navigate = useNavigate(); 

    const handleChoreClick = (chore) => {
        if (clickedChores.includes(chore)) {
            setClickedChores(clickedChores.filter(item => item !== chore));
        } else {
            setClickedChores([...clickedChores, chore]);
        }
    };

    const isChoreClicked = (chore) => {
        return clickedChores.includes(chore);
    };

    const navigateToPeoplePage = () => {
        navigate('/people'); // Navigate to PeoplePage
    };

    return (
        <div className="chore-content">
            <div className="header">
                <h1>What don't you want to do?</h1>
            </div>
            <div className="chores">
                <div className="chore-buttons">
                    
                    <button
                        className={isChoreClicked('Washing dishes') ? 'clicked' : ''}
                        onClick={() => handleChoreClick('Washing dishes')}
                    >
                        Washing dishes
                    </button>
                    <button
                        className={isChoreClicked('Make dinner') ? 'clicked' : ''}
                        onClick={() => handleChoreClick('Make dinner')}
                    >
                        Make dinner
                    </button>
                    <button
                        className={isChoreClicked('Hoover') ? 'clicked' : ''}
                        onClick={() => handleChoreClick('Hoover')}
                    >
                        Hoover
                    </button>
                    <button
                        className={isChoreClicked('Water plants') ? 'clicked' : ''}
                        onClick={() => handleChoreClick('Water plants')}
                    >
                        Water plants
                    </button>
                </div>
                <div className="next-page-button">
                    <button onClick={navigateToPeoplePage}>Next</button>
                </div>
            </div>
        </div>
    );
}
