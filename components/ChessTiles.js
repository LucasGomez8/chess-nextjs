import styles from "../styles/chessboard.module.css";
import pieces from "../styles/pieces.module.css";


let i = 0;

export default function ChessTiles({deconotation, img, numId}) {
    
       if(deconotation%2 == 0){
              if(img != undefined){
                     return(
                     <div className={styles.chess_white_square}>
                            <div id={numId} style={{backgroundImage: `url(${img})`}} className={pieces.piece}></div>
                     </div>
                     )
              }
              else{
                     return(
                     <div className={styles.chess_white_square}>
                            <div id={numId} style={{backgroundImage: `url(${img})`}}></div>
                     </div>
                     )
              }
       }
       else{
              if(img != undefined){
                     return(
                     <div className={styles.chess_black_square}>
                            <div id={numId} style={{backgroundImage: `url(${img})`}} className={pieces.piece}></div>
                     </div>
                     )
              }
              else{
                     return(
                     <div className={styles.chess_black_square}>
                            <div id={numId} style={{backgroundImage: `url(${img})`}}></div>
                     </div>
                     )

              }
       }
}