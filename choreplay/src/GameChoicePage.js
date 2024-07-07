import './GameChoicePage.css';
import { useNavigate } from 'react-router-dom';


export default function GameChoicePage () {
    const navigate = useNavigate(); 
    
    const navigateToGamePage = () => {
        navigate('/gamepage');
    };
    return (
        <div>
            <div className="game-choice-content">

            <img src='/Group 5.png' width="100%" />

                <h2>Pick your game</h2>

                <div className="games">
                    <div className="game">
                        <img src="/spaceinvaders.png" onClick={navigateToGamePage}/>
                        <p>Space Invaders</p>
                    </div>
                    <div className="game">
                        <img src="/icefishing.png" />
                        <p>Ice Fishing</p>
                    </div>
                    <div className="game">
                        <img src="/donkeykong.png" />
                        <p>Donkey Kong</p>
                    </div>
                    <div className="game">
                        <img src="/pacman.png" />
                        <p>Pac Man</p>
                    </div>
                    <div className="game">
                        <img src="/pizzeria.png" />
                        <p>Pizzeria</p>
                    </div>

                </div>


            </div>
        </div>
    )
}