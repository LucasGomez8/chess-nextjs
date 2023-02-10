import GeneralFunction from "../generalfunctions/general_functions";
export const validateQueenMovements = (py, px, nx, ny, team, positions, loseAPiece) => {

    switch (team){
        case 'white':

        for(let i = 0; i<8; i++){
            if(Math.abs(parseInt(py) -  parseInt(ny)) == i && Math.abs(parseInt(px) - parseInt(nx)) == i){
                if(!isATeammateInTheDiagonalWay(py, px, nx, ny, positions)){
                    let piece = validateQueenAttack(py, px, ny, nx, team, positions);
                    
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

        if((ny > py || ny < py) && px == nx){
            if(!isAPieceInWay(py, px, ny, nx, team, positions)){
                let piece = validateQueenAttack(py, px, ny, nx, team, positions);
                    
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
                let piece = validateQueenAttack(py, px, ny, nx, team, positions);
                    
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
            
        for(let i = 0; i<8; i++){
            if(Math.abs(parseInt(py) -  parseInt(ny)) == i && Math.abs(parseInt(px) - parseInt(nx)) == i){
                if(!isATeammateInTheDiagonalWay(py, px, nx, ny, positions)){
                    return true;
                }
                
            }
        }

        if((ny > py || ny < py) && px == nx){
            if(!isAPieceInWay(py, px, ny, nx, team, positions)){
                let piece = validateQueenAttack(py, px, ny, nx, team, positions);
                    
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
                let piece = validateQueenAttack(py, px, ny, nx, team, positions);
                    
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

        return false;

    }

}


const isATeammateInTheDiagonalWay= (py, px, nx, ny, positions) => {
    
    if(py < ny && px < nx){
        let j = parseInt(px) + 1;
        for(let i = parseInt(py) + 1; i < ny; i++){
            
            if(positions.find( item => item.y == i && item.x == j)){
                return true;
            }
        j++;
        }
    }

    if(py > ny && px < nx){
        let j =  parseInt(px) + 1;
        for(let i = py - 1; i > ny; i--){
            
            if(positions.find( item => item.y == i && item.x == j)){
        console.log("aca");

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
        for(let i = parseInt(px) - 1; i > nx; i--){
            if(positions.find(item => item.x == i && item.y == py)){
                console.log("aca");
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

const validateQueenAttack = (py, px, ny, nx, team, positions) => {

    let piece = undefined;
    positions.forEach( item => {
        if(item.x == nx && item.y == ny){
            piece = item;
        }
    })
    return piece;

}