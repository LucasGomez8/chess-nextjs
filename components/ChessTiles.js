import styles from "../styles/chessboard.module.css";
import pieces from "../styles/pieces.module.css";

export default function ChessTiles({ x, y, deconotation, img, numId }) {
  if (deconotation % 2 == 0) {
    if (img != undefined) {
      return (
        <div x={x} y={y} className={styles.chess_white_square}>
          <div
            id={numId}
            style={{ backgroundImage: `url(${img})` }}
            className={pieces.piece}
          ></div>
        </div>
      );
    } else {
      return <div x={x} y={y} className={styles.chess_white_square}></div>;
    }
  } else {
    if (img != undefined) {
      return (
        <div x={x} y={y} className={styles.chess_black_square}>
          <div
            id={numId}
            style={{ backgroundImage: `url(${img})` }}
            className={pieces.piece}
          ></div>
        </div>
      );
    } else {
      return <div x={x} y={y} className={styles.chess_black_square}></div>;
    }
  }
}
