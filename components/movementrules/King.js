export const validateKingMoves = (py, px, nx, ny, team, positions, loseAPiece) => {
    switch(team){
        case 'white':
            if(Math.abs(parseInt(py) - parseInt(ny)) == 1 || Math.abs(parseInt(px) - parseInt(nx)) == 1){
                let piece = validateKingAttack(py, px, ny, nx, team, positions);
                    
                if(piece != undefined){
                    if(piece.team == team){
                        return false;
                    }
                    loseAPiece(piece.id);
                    return true;
                }

                return true;
            }
        case 'black':
            if(Math.abs(parseInt(py) - parseInt(ny)) == 1 || Math.abs(parseInt(px) - parseInt(nx)) == 1){
                let piece = validateKingAttack(py, px, ny, nx, team, positions);
                    
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
}



const validateKingAttack = (py, px, ny, nx, team, positions) => {

    let piece = undefined;
    positions.forEach( item => {
        if(item.x == nx && item.y == ny){
            piece = item;
        }
    })
    return piece;

}