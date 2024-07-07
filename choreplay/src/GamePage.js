// import GameDisplay from "./GamePageRender";
// <GameDisplay/>

// let tileSize = 32;
// let rows = 16;
// let columns = 16;

// let board;
// let boardWidth = tileSize * columns;
// let boardHeight = tileSize * rows;
// let context;


// // ship

// let shipWidth = tileSize;
// let shipHeight = tileSize; 
// let shipX = tileSize * columns/2 - tileSize;
// let shipY = tileSize * rows - tileSize*2; // sets y axis for ship - so it stays in bottom 2 rows 

// let ship = {
//     x : shipX,
//     y : shipY,
//     width : shipWidth,
//     height : shipHeight
// }

// let shipImg;
// let shipVelocityX = tileSize; //speed ship moves - alwasy moves along x plain

// // mud
// let mudArray = [];
// let mudWidth = tileSize/2; // adapted tile width to make image work better! from * 2
// let mudHeight = tileSize;
// let mudX = tileSize;
// let mudY = tileSize;
// // let mudImg; moved inside loop 

// let mudRows = 2;
// let mudColumns = 3;
// let mudCount = 0; // no of muds to defeat 
// let mudVelocityX = 1; // mud moving speed

// // sponges
// let spongeArray = [];
// let spongeVelocityY = -10; // sponge moving speed - minus bc moving up 
// let spongeImg;

// let score = 0;
// let gameOver = false;

// // on load function

// window.onload = function() {
//     board = document.getElementById("board");
//     board.width = boardWidth;
//     board.height = boardHeight;
//     context = board.getContext("2d"); // used for drawing on board 


// // draw initial ship

// //load images 
//     shipImg = new Image();
//     shipImg.src = "public/ship.png";
//     shipImg.onload = function() {
//     // console.log("Image loaded successfully.");
//         context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
//     }

//     createMuds();

//     spongeImg = new Image();
//     spongeImg.src= "public/sponge.png";

//     requestAnimationFrame(update);
//     document.addEventListener("keydown", moveShip); // why is this in this place specifically?
//     document.addEventListener("keyup", shoot); // keyup bc means have to let key go - can't just hold it down
// }

// function update() {
//     requestAnimationFrame(update);

//     if (gameOver) {
//        return gameOverScreen();
//     }

//     context.clearRect(0,0,board.width,board.height); //clears previous board so don't have multiple ships
    
//     // bucket
//     context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);

//     // mud
//     for (let i = 0; i<mudArray.length; i++) {
//         let mud = mudArray[i];
//         if (mud.alive) {
//             mud.x += mudVelocityX;

//             //if mud touches borders
//             if (mud.x + mud.width > board.width || mud.x <= 0 ) {
//                 mudVelocityX *= -1;
//                 mud.x += mudVelocityX*2; //solves muds becoming out of sync/out of line - fix
                
//                 // move muds forward by 1 row
//                 for (let j=0; j< mudArray.length; j++) {
//                     mudArray[j].y += mudHeight;
//                 }
//             }
//             context.drawImage(mud.img, mud.x, mud.y, mud.width, mud.height); //mud.img defined in createMuds for loop

//             if(mud.y >= ship.y) {
//                 gameOver = true;
//             }
//         }
//     }

//     // sponges

//     for (let i=0; i < spongeArray.length; i++) {
//         let sponge = spongeArray[i];
//         sponge.y += spongeVelocityY;

//         context.drawImage(spongeImg, sponge.x, sponge.y, sponge.width, sponge.height); 

//         //sponge collision with muds
//         for ( let j = 0; j< mudArray.length; j++) {
//             let mud = mudArray[j];
//             if (!sponge.used && mud.alive && detectCollision(sponge, mud)) {
//                 sponge.used = true;
//                 mud.alive = false;
//                 mudCount--;
//                 score += 100;
//             }
//         }
//     }



//     // clear sponges
//     while (spongeArray.length > 0 && (spongeArray[0].used || spongeArray[0].y<0)) {
//         spongeArray.shift(); // as soon as sponge goes above canvas, deletes one from spongeArray - stops them accumulating and slowing game down 
//     }

//     // next cohort
//     if (mudCount===0) {
//         //increase number of muds in columns and rows by 1
//         mudColumns = Math.min(mudColumns +1, columns - 2); // didn't divide columns by y2 as mud is only one tileSize wide - cap at 16 - 2 - max 14 columsn of muds?
//         mudRows = Math.min(mudRows + 1, rows-4); // cap at 16-4 - max 12 rows of muds
//         mudVelocityX += 0.2; //increase mud speed with each level 
//         mudArray = [];
//         spongeArray = []; // clear sponges so sponge used previously doesn't accidentally touch next bank of muds 
//         createMuds();
//     }

//     //score
//     context.fillStyle="white";
//     context.font="16px courier";
//     context.fillText(score, 5, 20);
    
    
// }

// function moveShip(e) { // e = event
//     if (gameOver) {
//         return gameOverScreen();
//     }
//     if (e.code === "ArrowLeft" && ship.x - shipVelocityX >=0) { //ensures ship will not go off the page 
//         ship.x -= shipVelocityX; //move left - shipVeloctyX = tileSize of 1
//     }
//     else if (e.code === "ArrowRight" && ship.x + shipVelocityX + shipWidth <= board.width) { // not v clear why need both shipVel and shipWidth??
//         ship.x += shipVelocityX; //move right
//     }
// }




// function createMuds() {
//     for (let c=0; c < mudColumns; c++) {
//         for (let r=0; r < mudRows; r++) {
//             let mud = {
//                 img : new Image(), //moved to inside the loop, so each individual mud is randomised - was previosuly outsdie the loop
//                 x : mudX + c*mudWidth,
//                 y : mudY + r*mudHeight,
//                 width : mudWidth,
//                 height : mudHeight,
//                 alive : true
//             }
//             mud.img.onload = function() { // adds onload to ensure the image loaded before drawing
//                 context.drawImage(mud.img, mud.x, mud.y, mud.width, mud.height);
//               };
//             mud.img.src = "public/mud.png";
//             mudArray.push(mud);
//         }
//     }
//     mudCount = mudArray.length; //keeping track of how many gone
// }

// function shoot (e) {
//     if (gameOver) {
//         return gameOverScreen();
//     }
//     if (e.code === "Space") {
//        //shoot
//        let sponge = {
//         x : ship.x + shipWidth *15/32,
//         y : ship.y,
//         width : tileSize/8,
//         height : tileSize/8, //changed to keep shape round
//         used : false
//        } 
//        spongeArray.push(sponge);
//     }
// }

// //condition for checking collsion between two objects 

// function detectCollision (a,b) {
//     return a.x < b.x + b.width && //a's top left doesn't reach b's top right
//     a.x + a.width > b.x && // a's top right corner passes b's top left corner 
//     a.y < b.y + b.height && //a's top left corner doesn't reach b's bottom left corner
//     a.y + a.height > b.y; //a's bottom left corner passes b's top left corner
// }

// //game over screen

// function gameOverScreen() {
//     context.fillStyle="white";
//     context.font="72px courier";
//     let text = "CHORE HIT";
//     let textWidth = context.measureText(text).width; // to ensure the text is in centre of board regardless of screen size
//     let textX = (board.width - textWidth) / 2;
//     let textY = board.height / 2;
//     context.fillText(text, textX, textY); 
//     setGamePlayed();
// }

// let gamePlayed = false; // Flag to indicate if the game has been played


// // Function to set the game played flag
// function setGamePlayed() {
//     gamePlayed = true;
//     openPopup();
//   }

// // Function to open the popup
// function openPopup() {
//   document.getElementById('chorePopup').style.display = 'block';
// }

// // Function to close the popup
// // function closePopup() {
// //   document.getElementById('chorePopup').style.display = 'none';
// // }


import React, { useEffect, useRef } from 'react';
import GameDisplay from "./GamePageRender";

const GamePage = () => {
    const canvasRef = useRef(null);
    const shipImg = useRef(new Image());
    const spongeImg = useRef(new Image());
    let tileSize = 32;
    let rows = 16;
    let columns = 16;
    let boardWidth = tileSize * columns;
    let boardHeight = tileSize * rows;
    let context;
    let shipWidth = tileSize;
    let shipHeight = tileSize;
    let shipX = tileSize * columns / 2 - tileSize;
    let shipY = tileSize * rows - tileSize * 2;
    let ship = { x: shipX, y: shipY, width: shipWidth, height: shipHeight };
    let shipVelocityX = tileSize;
    let mudArray = [];
    let mudWidth = tileSize / 2;
    let mudHeight = tileSize;
    let mudX = tileSize;
    let mudY = tileSize;
    let mudRows = 2;
    let mudColumns = 3;
    let mudCount = 0;
    let mudVelocityX = 1;
    let spongeArray = [];
    let spongeVelocityY = -10;
    let score = 0;
    let gameOver = false;

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = boardWidth;
        canvas.height = boardHeight;
        context = canvas.getContext("2d");

        shipImg.current.src = "public/ship.png";
        shipImg.current.onload = () => {
            context.drawImage(shipImg.current, ship.x, ship.y, ship.width, ship.height);
        };

        spongeImg.current.src = "public/sponge.png";

        createMuds();
        requestAnimationFrame(update);
        document.addEventListener("keydown", moveShip);
        document.addEventListener("keyup", shoot);

        return () => {
            document.removeEventListener("keydown", moveShip);
            document.removeEventListener("keyup", shoot);
        };
    }, []);

    const createMuds = () => {
        for (let c = 0; c < mudColumns; c++) {
            for (let r = 0; r < mudRows; r++) {
                let mud = {
                    img: new Image(),
                    x: mudX + c * mudWidth,
                    y: mudY + r * mudHeight,
                    width: mudWidth,
                    height: mudHeight,
                    alive: true
                };
                mud.img.onload = () => {
                    context.drawImage(mud.img, mud.x, mud.y, mud.width, mud.height);
                };
                mud.img.src = "public/mud.png";
                mudArray.push(mud);
            }
        }
        mudCount = mudArray.length;
    };

    const update = () => {
        requestAnimationFrame(update);

        if (gameOver) {
            return gameOverScreen();
        }

        context.clearRect(0, 0, boardWidth, boardHeight);
        context.drawImage(shipImg.current, ship.x, ship.y, ship.width, ship.height);

        for (let mud of mudArray) {
            if (mud.alive) {
                mud.x += mudVelocityX;
                if (mud.x + mud.width > boardWidth || mud.x <= 0) {
                    mudVelocityX *= -1;
                    mud.x += mudVelocityX * 2;
                    for (let m of mudArray) {
                        m.y += mudHeight;
                    }
                }
                context.drawImage(mud.img, mud.x, mud.y, mud.width, mud.height);
                if (mud.y >= ship.y) {
                    gameOver = true;
                }
            }
        }

        for (let sponge of spongeArray) {
            sponge.y += spongeVelocityY;
            context.drawImage(spongeImg.current, sponge.x, sponge.y, sponge.width, sponge.height);
            for (let mud of mudArray) {
                if (!sponge.used && mud.alive && detectCollision(sponge, mud)) {
                    sponge.used = true;
                    mud.alive = false;
                    mudCount--;
                    score += 100;
                }
            }
        }

        spongeArray = spongeArray.filter(s => !s.used && s.y >= 0);

        if (mudCount === 0) {
            mudColumns = Math.min(mudColumns + 1, columns - 2);
            mudRows = Math.min(mudRows + 1, rows - 4);
            mudVelocityX += 0.2;
            mudArray = [];
            spongeArray = [];
            createMuds();
        }

        context.fillStyle = "white";
        context.font = "16px courier";
        context.fillText(score, 5, 20);
    };

    const moveShip = (e) => {
        if (gameOver) {
            return gameOverScreen();
        }
        if (e.code === "ArrowLeft" && ship.x - shipVelocityX >= 0) {
            ship.x -= shipVelocityX;
        } else if (e.code === "ArrowRight" && ship.x + shipVelocityX + shipWidth <= boardWidth) {
            ship.x += shipVelocityX;
        }
    };

    const shoot = (e) => {
        if (gameOver) {
            return gameOverScreen();
        }
        if (e.code === "Space") {
            let sponge = {
                x: ship.x + shipWidth * 15 / 32,
                y: ship.y,
                width: tileSize / 8,
                height: tileSize / 8,
                used: false
            };
            spongeArray.push(sponge);
        }
    };

    const detectCollision = (a, b) => {
        return a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y;
    };

    const gameOverScreen = () => {
        context.fillStyle = "white";
        context.font = "72px courier";
        let text = "CHORE HIT";
        let textWidth = context.measureText(text).width;
        let textX = (boardWidth - textWidth) / 2;
        let textY = boardHeight / 2;
        context.fillText(text, textX, textY);
        openPopup();
    };

    const openPopup = () => {
        document.getElementById('chorePopup').style.display = 'block';
    };

    return <GameDisplay canvasRef={canvasRef} />;
};

export default GamePage;
