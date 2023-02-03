export const validateKnightMoves = (py, px, nx, ny, team, positions, loseAPiece) => {
    switch(team){
        case 'white':
            if(Math.abs(parseInt(py) - parseInt(ny)) == 1 || Math.abs(parseInt(py) - parseInt(ny)) == 2){
                if(Math.abs(parseInt(px) - parseInt(nx)) == 1 || Math.abs(parseInt(px) - parseInt(nx)) == 2){
                    let piece = validateKnightAttack(nx, ny, positions);
                        
                    if(piece != undefined){
                        if(piece.team == team){
                            return false;
                        }
                        
                        loseAPiece(piece.id);
                        return true;
                    }
                    
                    return true;
                }
            }
        break;
        case 'black':
            if(Math.abs(parseInt(py) - parseInt(ny)) == 1 || Math.abs(parseInt(py) - parseInt(ny)) == 2){
                if(Math.abs(parseInt(px) - parseInt(nx)) == 1 || Math.abs(parseInt(px) - parseInt(nx)) == 2){
                    let piece = validateKnightAttack(nx, ny, positions);
                    if(piece != undefined){
                        if(piece.team == team){
                            return false;
                        }
                        loseAPiece(piece.id);
                        return true;
                    }
                    return true;
                }
            }
        break;
    }
}

const validateKnightAttack = (nx, ny, positions) => {
    let piece = undefined;
    positions.forEach( item => {
        if(item.x == nx && item.y == ny){
            piece = item;
        }
    })
    return piece;
}