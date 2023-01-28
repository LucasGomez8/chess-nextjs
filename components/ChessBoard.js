import ChessTiles from "./ChessTiles"
import styles from "../styles/chessboard.module.css"
import { useEffect, useRef, useState } from "react";
import {v4} from "uuid";
import Jimmy from "./jimmy/Jimmy";


const verticalPosition = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalPosition = ["a", "b", "c", "d", "e", "f", "g", "h"];

let positions = [];
const pieces = [];


for(let i = 0; i<8; i++){
    pieces.push({id: "a"+i,img: './assets/img/black_pawn.png', x:i, y:6, team: 'black', type: 'pawn'});
}
for(let i = 0; i<8; i++){
    pieces.push({id:"b"+i,img: './assets/img/white_pawn.png', x:i, y:1, team: 'white', type: 'pawn'});
}


for(let i = 0; i<2; i++){

    const color = i == 0 ? 'black' : 'white';
    const exeY = i == 0 ? 7 : 0
//ROOKS
pieces.push({id: v4(),img: `./assets/img/${color}_rook.png`, x:0, y:exeY, team: color, type:'rook'});
pieces.push({id: v4(),img: `./assets/img/${color}_rook.png`, x:7, y:exeY, team: color, type:'rook'});

// KNIGHTS
pieces.push({id: v4(),img:`./assets/img/${color}_knight.png`, x:1, y:exeY, team: color, type:'knight'});
pieces.push({id: v4(),img:`./assets/img/${color}_knight.png`, x:6, y:exeY, team: color, type:'knight'});

// BISHOP
pieces.push({id: v4(),img:`./assets/img/${color}_bishop.png`, x:2, y:exeY, team: color, type: 'bishop'});
pieces.push({id: v4(),img:`./assets/img/${color}_bishop.png`, x:5, y:exeY, team: color, type: 'bishop'});

// QUEEN
pieces.push({id: v4(),img:`./assets/img/${color}_queen.png`, x:3, y:exeY, team: color, type: 'queen'});

// KING
pieces.push({id: v4(),img:`./assets/img/${color}_king.png`, x:4, y:exeY, team: color, type: 'king'});

}
        
    for(let i = verticalPosition.length - 1 ; i>=0; i--){
        for(let j = 0; j< horizontalPosition.length; j++){
            
            let x = i + j;
            let img = undefined;
            let id = null;
    
            pieces.forEach((p) =>{
                
                if(p.x === j && p.y === i ){
                    img = p.img;
                    id = p.id;
                }
            })
    
            positions.push(<ChessTiles key={v4()} numId={id} img={img} deconotation={x}></ChessTiles>);
        
        }
    }

export default function ChessBoard() {
    const [defPieces, setDefPieces] = useState(pieces);
    const [idTarget, setIdTarget] = useState();
    const [activePiece, setActivePiece] = useState(false);
    const [firstLoad, setFirstLoad] = useState(false);
    const [initialPositions, setInitialPositions] = useState(positions);
    const board = useRef();
    
    const jim = new Jimmy();

    useEffect(()=>{
        positions = [];
            for(let i = verticalPosition.length - 1 ; i>=0; i--){
                for(let j = 0; j< horizontalPosition.length; j++){            
                    let x = i + j;
                    let img = undefined;
                    let id = null;
                    defPieces.forEach((p) =>{
                        if(p.x === j && p.y === i ){
                            img = p.img;
                            id = p.id;
                        }
                    })                    
                    positions.push(<ChessTiles key={v4()} numId={id} img={img} deconotation={x}></ChessTiles>);
                }
            }
           setInitialPositions(positions);
    },[firstLoad])

    const handleClickPiece = (e) => {
        if(activePiece == false){
            if(e.target.className.includes('piece')){
                setIdTarget(e.target.id);
                setActivePiece(true);
            }
        }
        else {   
                const x =  Math.floor((e.clientX - board.current.offsetLeft)/100);
                const y =  Math.abs(Math.ceil((e.clientY - board.current.offsetTop - 750)/100));
                
                const piec = defPieces.find( i => i.id == idTarget);

                if(jim.validateNextPosition(piec.x, piec.y, x, y, piec.team, piec.type)){
                    console.log("validate move");
                    defPieces.forEach((p) => {
                        if(p.id == idTarget){
                            p.x = x;
                            p.y = y;
                        }
                    })
                }
                else{
                    console.log("not valid");
                }

                setActivePiece(false);
                setFirstLoad(!firstLoad);
        }
    }

    // WEB DISPLAYING
    return( 
        <div id={styles.square} ref={board} onClick={e => handleClickPiece(e)}>
                {initialPositions}
        </div>
    )
}