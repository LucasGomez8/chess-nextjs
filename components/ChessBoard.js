import ChessTiles from "./ChessTiles";
import styles from "../styles/chessboard.module.css";
import { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";
import Jimmy from "./jimmy/Jimmy";
import { verticalPosition, horizontalPosition, PiecesPlaces } from "./pieces/Places";
import {addingAPieceToCountTable, findTeam} from "./generalfunctions/general_functions";

import {Modal} from 'react-bootstrap';
import { Button } from "react-bootstrap";

export default function ChessBoard() {

  let positions = [];
  let teamTurn = "";
  const [defPieces, setDefPieces] = useState(PiecesPlaces());
  const [isKingDead, setIsKingDead] = useState(false);
  const [turns, setTurns] = useState('white');
  const [idTarget, setIdTarget] = useState();
  const [activePiece, setActivePiece] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);
  const [initialPositions, setInitialPositions] = useState();
  const [show, setShow] = useState(false);
  const [showCautionModal, setShowCautionModal] = useState(false);
  const [showLoseModal, setShowLoseModal] = useState(false);
  const [opTurn, setOpTurn] = useState(false);
  const [lastPieceMove, setLastPieceMove] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [axis, setAxis] = useState({
    x: 0,
    y: 0,
  });

  const board = useRef();

  const loseAPiece = (id, team) => {

    let piece = defPieces.filter( item => item.id == id);
    if(piece[0].type == 'king'){
    }
    addingAPieceToCountTable(piece);
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

          if(lastPieceMove.id == p.id){
            img = lastPieceMove.img;
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
        teamTurn = findTeam(e.target.id, defPieces);
        if(teamTurn == turns){
          setIdTarget(e.target.id);
          setActivePiece(true);
        }
        else{
          setShowCautionModal(true);
        }
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
      setLastPieceMove(piec.id);

      if (
        jim.validateNextPosition(piec.x, piec.y, x, y, piec.team, piec.type, defPieces, loseAPiece)
      ) {
        defPieces.forEach((p) => {
          if (p.id == idTarget) {
            p.x = x;
            p.y = y;
          }
        });

        if(piec.type == "pawn" && (y == 7 || y == 0)){
          setShow(true);
        }

        if(turns == 'white'){
          setTurns('black');
        }
        else{
          
        setTurns('white');
        }
      } else {
        //invalid move
        setOpTurn(true);
      }
      setActivePiece(false);
      setFirstLoad(!firstLoad);
    }

  };

  const changePromo = (src) => {
      defPieces.forEach( item => {
        if(item.id == lastPieceMove){
          item.img = `./assets/img/${item.team}_${src}.png`,
          item.type = src
        }
      })
      setFirstLoad(!firstLoad);
      setShow(false);
  }

  // WEB DISPLAYING
  return (
    <div id={styles.square} ref={board} onClick={(e) => handleClickPiece(e)}>
      {initialPositions}

      <div>

        {/* PROMOTION MODAL */}
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header style={{backgroundColor: "#052136"}}>
          <Modal.Title style={{color: "white"}}>Choose your promotion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your pawn has reached enemy's final line, get your reward
          <div className={styles.promodalrow}>
            <img src="./assets/img/white_bishop.png" alt="Bishop" onClick={ e => changePromo('bishop')}  />
            <img src="./assets/img/white_rook.png" alt="Rook" onClick={ e => changePromo('rook')} />
            <img src="./assets/img/white_knight.png" alt="Knight" onClick={ e => changePromo('knight')} />
            <img src="./assets/img/white_queen.png"  alt="Queen" onClick={ e => changePromo('queen')} />
          </div>
        </Modal.Body>
      </Modal>

      {/*CAUTION MODAL*/}
      <Modal show={showCautionModal} onHide={handleClose} animation={false}>
        <Modal.Header style={{backgroundColor: "#052136"}}>
          <Modal.Title style={{color: "white"}}>Can't Do That</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Uh Oh!... It's Opponents Turn
        </Modal.Body>
      </Modal>

      {/* LOSE MODAL */}
      <Modal show={showLoseModal} onHide={handleClose} animation={false}>
        <Modal.Header style={{backgroundColor: "#052136"}}>
          <Modal.Title style={{color: "white"}}>GAME OVER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You Lose :(
        </Modal.Body>
      </Modal>

      {/* OPPONENTS TURNS*/}
      <Modal show={opTurn} onHide={handleClose} animation={false}>
        <Modal.Header style={{backgroundColor: "#052136"}}>
          <Modal.Title style={{color: "white"}}>Seriously??</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          It's not your turn
        </Modal.Body>
      </Modal>
      </div>
    </div>
  );
}
