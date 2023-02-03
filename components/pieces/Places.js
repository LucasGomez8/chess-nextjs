
import { v4 } from "uuid";


export const verticalPosition = ["1", "2", "3", "4", "5", "6", "7", "8"];
export const horizontalPosition = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const PiecesPlaces = () => {

    const pieces = [];

for (let i = 0; i < 8; i++) {
  pieces.push({
    id: "a" + i,
    img: "./assets/img/black_pawn.png",
    x: i,
    y: 6,
    team: "black",
    type: "pawn",
  });
}
for (let i = 0; i < 8; i++) {
  pieces.push({
    id: "b" + i,
    img: "./assets/img/white_pawn.png",
    x: i,
    y: 1,
    team: "white",
    type: "pawn",
  });
}

for (let i = 0; i < 2; i++) {
  const color = i == 0 ? "black" : "white";
  const exeY = i == 0 ? 7 : 0;
  //ROOKS
  pieces.push({
    id: v4(),
    img: `./assets/img/${color}_rook.png`,
    x: 0,
    y: exeY,
    team: color,
    type: "rook",
  });

  pieces.push({
    id: v4(),
    img: `./assets/img/${color}_rook.png`,
    x: 7,
    y: exeY,
    team: color,
    type: "rook",
  });

  // KNIGHTS
  pieces.push({
    id: v4(),
    img: `./assets/img/${color}_knight.png`,
    x: 1,
    y: exeY,
    team: color,
    type: "knight",
  });

  pieces.push({
    id: v4(),
    img: `./assets/img/${color}_knight.png`,
    x: 6,
    y: exeY,
    team: color,
    type: "knight",
  });

  // BISHOP
  pieces.push({
    id: v4(),
    img: `./assets/img/${color}_bishop.png`,
    x: 2,
    y: exeY,
    team: color,
    type: "bishop",
  });

  pieces.push({
    id: v4(),
    img: `./assets/img/${color}_bishop.png`,
    x: 5,
    y: exeY,
    team: color,
    type: "bishop",
  });

  // QUEEN
  pieces.push({
    id: v4(),
    img: `./assets/img/${color}_queen.png`,
    x: 3,
    y: exeY,
    team: color,
    type: "queen",
  });

  // KING
  pieces.push({
    id: v4(),
    img: `./assets/img/${color}_king.png`,
    x: 4,
    y: exeY,
    team: color,
    type: "king",
  });
}
return pieces;
}