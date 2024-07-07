// import React from "react";

// export function GameDisplay() {
//     return (
//     <>
//     <h1>Choreplay</h1>
//     <div id="chorePopup" class="popup">
//         <div class="popup-content">
//           <h2>You bagged a chore!</h2>
//         </div>
//       </div>
//     <div class="flex-row">    
//         <div class="flex-col"> 
//             <canvas id="board"></canvas>
//         </div>    
//     </div>
//     </>
//     )
// }


import React from "react";
import './GamePageRender.css';


const GameDisplay = ({ canvasRef }) => {
    
    return (
        <>
            <h1>Choreplay</h1>
            <div id="chorePopup">
                <div id="popup-content">
                    <h2>It's floor mopping for you! Grab that mop, king!</h2>
                </div>
            </div>
            <div className="flex-row">
                <div className="flex-col">
                    <canvas id="board" ref={canvasRef}></canvas>
                </div>
            </div>
        </>
    );
};

export default GameDisplay;
