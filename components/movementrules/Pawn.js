
export const ValidatePawnMoves = (py, px, nx, ny, team, positions, loseAPiece) => {
    switch(team){
        case "white":
            if(((parseInt(py) + 1 == ny || (parseInt(py) == 1 && parseInt(py) + 2) == ny)) && nx == px){
                let piece = validatePawnAttack(ny, nx, positions, team);
                if(piece != undefined){
                    return false;
                }
                return true;
            }

            //THIS MOVE IS AN ATTACK
            if((parseInt(py) + 1 == ny && parseInt(px) + 1 == nx) ||  (parseInt(py) + 1 == ny && parseInt(px) - 1 == nx)){
               let piece = validatePawnAttack(ny, nx, positions, team);
               console.log(piece);
               if(piece != undefined){
                    if(ny == 7){
                        alert('is a promotion');
                    }
                    loseAPiece(piece.id);
                    return true;
                }
                else{
                    return false;
                }
            }


        break;
        case "black":
            if(((parseInt(py) - 1 == ny || (parseInt(py) == 6 && parseInt(py) - 2) == ny)) && nx == px){
                let piece = validatePawnAttack(ny, nx, positions, team);
                if(piece != undefined){
                    return false;
                }
                return true;
            }
            //THIS MOVE IS AN ATTACK
            if((parseInt(py) - 1 == ny && parseInt(px) + 1 == nx) ||  (parseInt(py) - 1 == ny && parseInt(px) - 1 == nx)){
               let piece = validatePawnAttack(ny, nx, positions, team);
               if(piece != undefined){
                    loseAPiece(piece.id);
                    return true;
                }
                else{
                    return false;
                }
            }
         break;
         default:
            return false;
        
    }

}

const validatePawnAttack = (ny, nx, positions, team) => {
    let piece = undefined;
    positions.forEach( item => {
        if(item.x == nx && item.y == ny && item.team != team){
            piece = item;
        }
    })
    return piece;
}
