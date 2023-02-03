export const validateQueenMovements = (py, px, nx, ny, team, positions, loseAPiece) => {

    switch (team){
        case 'white':

        for(let i = 0; i<8; i++){
            if(Math.abs(parseInt(py) -  parseInt(ny)) == i && Math.abs(parseInt(px) - parseInt(nx)) == i){
                if(!isATeammateInTheDiagonalWay(py, px, nx, ny, positions)){
                    return true;
                }
                
            }
        }

        if((ny > py || ny < py) && px == nx){
            if(!isATeammateInTheVerticalWay(py, px, nx, ny, positions)){
                return true;
            }
        }

        if(( nx > px || nx < px) && py == ny){
            if(!isATeammateInTheVerticalWay(py, px, ny, nx, positions)){
                console.log("retorno");
                return true;
            }
        }

        return false;


        case 'black':
            return true;
    }

}


const isATeammateInTheDiagonalWay= (py, px, nx, ny, positions) => {
    
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

const isATeammateInTheVerticalWay = (py, px, ny, nx, positions) => {
    if(py > ny){
        for(let i = parseInt(py) - 1; i > ny; i--){
            if(positions.find(item => item.y == i && item.x == px)){

                return true;
            }
        }
        console.log("salio");
        return false;
    }
    if(py < ny){
        for(let i = parseInt(py) + 1; i < ny; i++){
            console.log(positions.find(item => item.y == i && item.x == px));
            if(positions.find(item => item.y == i && item.x == px)){
                return true;
            }
        }
        console.log("salio 2");
        return false;
    }
    if(px > nx){
        for(let i = parseInt(px) - 1; i > nx; i--){
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