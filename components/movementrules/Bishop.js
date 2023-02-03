export const validateBishopMoves = (py, px, nx, ny, team, positions, loseAPiece) => {
    switch(team){
        case "white":
            for(let i = 0; i < 8; i++){
                if(Math.abs(ny - py) == i && Math.abs(nx - px) == i){

                    if(!isATeammateInTheWay(py, px, ny, nx, team, positions)){
                        let piece = validateBishopAttack(py, px, ny, nx, team, positions);
                        
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
        break;
        case "black":
            for(let i = 0; i < 8; i++){
                if(Math.abs(ny - py) == i && Math.abs(nx - px) == i){

                    if(!isATeammateInTheWay(py, px, ny, nx, team, positions)){
                        let piece = validateBishopAttack(py, px, ny, nx, team, positions);
                        
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
        break;
        default:
        return false;
    }
}

const isATeammateInTheWay = (py, px, ny, nx, team, positions) => { 

    if(py < ny && px < nx){
        let j = parseInt(px) + 1;
        for(let i = parseInt(py) + 1; i < ny; i++){
            
            if(positions.find( item => item.y == i && item.x == j)){
                console.log(positions.find( item => item.y == i && item.x == j));
                return true;
            }
        j++;
        }
    }

    if(py > ny && px < nx){
        let j =  parseInt(px) + 1;
        for(let i = py - 1; i > ny; i--){
            
            if(positions.find( item => item.y == i && item.x == j)){
                return true;
            }

        j++;
        }
    }

    if(py < ny && px > nx){
        let j = parseInt(px) - 1;
        for(let i = parseInt(py) + 1; i < ny; i++){
            
            if(positions.find( item => item.y == i && item.x == j)){
                return true;
            }

            j --;
        }
    }

    if(py > ny && px > nx){
        let j = parseInt(px) - 1;
        for(let i = py - 1; i > ny; i--){
            if(positions.find( item => item.y == i && item.x == j)){
                return true;
            }
            j--;
        }
    }


    return false;
}

const validateBishopAttack = (py, px, ny, nx, team, positions) => {

    
    let piece = undefined;
    positions.forEach( item => {
        if(item.x == nx && item.y == ny){
            piece = item;
            console.log("entro aca");
        }

        console.log("no entro al if");
    })
    return piece;

}