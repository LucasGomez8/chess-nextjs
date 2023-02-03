import ChessTiles from "./ChessTiles";
import styles from "../styles/chessboard.module.css";
import { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";
import Jimmy from "./jimmy/Jimmy";
import { verticalPosition, horizontalPosition, PiecesPlaces } from "./pieces/Places";

export default function ChessBoard() {

  let positions = [];
  const [defPieces, setDefPieces] = useState(PiecesPlaces());
  const [idTarget, setIdTarget] = useState();
  const [activePiece, setActivePiece] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);
  const [initialPositions, setInitialPositions] = useState();
  const [axis, setAxis] = useState({
    x: 0,
    y: 0,
  });

  const board = useRef();

  const loseAPiece = (id, team) => {

    //The TEAM argument it will be used for the points in a future
    setDefPieces(defPieces.filter( item => item.id !== id));
  }

  const jim = new Jimmy();

  useEffect(() => {
    positions = [];
    for (let i = verticalPosition.length - 1; i >= 0; i--) {
      for (let j = 0; j < horizontalPosition.length; j++) {
        let x = i + j;
        let img = undefined;
        let id = null;
        defPieces.forEach((p) => {
          if (p.x == j && p.y == i) {
            img = p.img;
            id = p.id;
          }
        });
        positions.push(
          <ChessTiles
            key={v4()}
            x={j}
            y={i}
            numId={id}
            img={img}
            deconotation={x}
          ></ChessTiles>
        );
      }
    }
    setInitialPositions(positions);
  }, [firstLoad]);

  const handleClickPiece = (e) => {
    if (activePiece == false) {
      if (e.target.className.includes("piece")) {
        setIdTarget(e.target.id);
        setActivePiece(true);
      }
    } else {
      let x;
      let y;
      if(e.target.className.includes("piece")){
        defPieces.forEach( item => {
          if(item.id == e.target.id){
            x = item.x,
            y = item.y
          }
        })
      }
      else{
        x = e.target.getAttribute("x");
        y = e.target.getAttribute("y");
      }
      const piec = defPieces.find((i) => i.id == idTarget);

      if (
        jim.validateNextPosition(piec.x, piec.y, x, y, piec.team, piec.type, defPieces, loseAPiece)
      ) {
        defPieces.forEach((p) => {
          if (p.id == idTarget) {
            p.x = x;
            p.y = y;
          }
        });
      } else {
        console.log("not valid");
      }
      setActivePiece(false);
      setFirstLoad(!firstLoad);
    }
  };

  // WEB DISPLAYING
  return (
    <div id={styles.square} ref={board} onClick={(e) => handleClickPiece(e)}>
      {initialPositions}
    </div>
  );
}
