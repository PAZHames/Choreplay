import React, { useState } from 'react';
import './HouseChoreList.css'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

export default function HouseChoreList() {

    const navigate = useNavigate(); 
    
    const navigateToPeoplePage = () => {
        navigate('/people');
    };

    const [toggled, setToggled] = useState({
        'Water Plants': false,
        'Hoover': false,
        'Clean Windows': false,
        'Fold Laundry': false,
        'Take Out Trash': false,
        'Wash Dishes': false,
    });

    const handleToggle = (chore) => {
        setToggled(prevState => ({
            ...prevState,
            [chore]: !prevState[chore],
        }));
    };

    const chores = [
        'Water Plants',
        'Hoover',
        'Clean Windows',
        'Fold Laundry',
        'Take Out Trash',
        'Wash Dishes',
    ];

    return (
        <div className="house-chore-list-container">
            
            <div className="header">
                <img src="Group 5.png" alt="Chore List" />
            </div>

            <div className="chores-all">
                {chores.map(chore => (
                    <div key={chore} className="chores" onClick={() => handleToggle(chore)}>
                        <img
                            src={toggled[chore] ? 'on-toggle.png' : 'off-toggle.png'}
                            alt={chore}
                        />
                        <p>{chore}</p>
                    </div>
                ))}

<div className="button-for-game-page">
    <button onClick={navigateToPeoplePage}>READY</button>
</div>

            </div>
        </div>
    );
}
