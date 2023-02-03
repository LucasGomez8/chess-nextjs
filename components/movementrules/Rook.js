export const validateRookMoves = (py, px, nx, ny, team, positions, loseAPiece) => {
    switch(team){
        case 'white':
            if((ny > py || ny < py) && px == nx){
                if(!isAPieceInWay(py, px, ny, nx, team, positions)){
                    let piece = validateRookAttack(py, px, ny, nx, team, positions);
                        
                    if(piece != undefined){
                        if(piece.team == team){
                            return false;
                        }
                        loseAPiece(piece.id);
                        return true;
                    }

                    return true;
                }

                return false;
            }

            if(( nx > px || nx < px) && py == ny){
                if(!isAPieceInWay(py, px, ny, nx, team, positions)){
                    let piece = validateRookAttack(py, px, ny, nx, team, positions);
                        
                    if(piece != undefined){
                        if(piece.team == team){
                            return false;
                        }
                        loseAPiece(piece.id);
                        return true;
                    }

                    return true;
                }
                return false;
            }
            
        case 'black':

        if((ny > py || ny < py) && px == nx){
            if(!isAPieceInWay(py, px, ny, nx, team, positions)){
                let piece = validateRookAttack(py, px, ny, nx, team, positions);
                    
                if(piece != undefined){
                    if(piece.team == team){
                        return false;
                    }
                    loseAPiece(piece.id);
                    return true;
                }

                return true;
            }

            return false;
        }

        if(( nx > px || nx < px) && py == ny){
            if(!isAPieceInWay(py, px, ny, nx, team, positions)){
                let piece = validateRookAttack(py, px, ny, nx, team, positions);
                    
                if(piece != undefined){
                    if(piece.team == team){
                        return false;
                    }
                    loseAPiece(piece.id);
                    return true;
                }

                return true;
            }

            return false;
        }
    }
}

const isAPieceInWay = (py, px, ny, nx, team, positions) => {
    if(py > ny){
        console.log("entro al primero")
        for(let i = parseInt(py) - 1; i > ny; i--){
            if(positions.find(item => item.y == i && item.x == px)){

                return true;
            }
        }
        return false;
    }
    if(py < ny){
        for(let i = parseInt(py) + 1; i < ny; i++){
            if(positions.find(item => item.y == i && item.x == px)){
                return true;
            }
        }
        return false;
    }
    if(px > nx){
        for(let i = parseInt(px) + 1; i > nx; i--){
            if(positions.find(item => item.x == i && item.y == py)){
                return true;
            }
        }
        return false;
    }
    if(px < nx){
        for(let i = parseInt(px) + 1; i < nx; i++){
            if(positions.find(item => item.x == i && item.y == py)){
                return true;
            }
        }
        return false;
    }
}

const validateRookAttack = (py, px, ny, nx, team, positions) => {

    let piece = undefined;
    positions.forEach( item => {
        if(item.x == nx && item.y == ny){
            piece = item;
        }
    })
    return piece;

}