
export const addingAPieceToCountTable = (piece) => {
    let content = "";
    console.log(piece[0]);
        switch(piece[0].team){
            case 'white':
                let divwhite = document.getElementById('white_row');
                content += `<img src="./assets/img/${piece[0].team}_${piece[0].type}.png"/>`
                divwhite.innerHTML += content;
                return;
            case 'black':
                let divblack = document.getElementById('black_row');
                content += `<img src="./assets/img/${piece[0].team}_${piece[0].type}.png"/>`
                divblack.innerHTML += content;
                break;
        }
}

export const findTeam = (p, pieceArray) => {
    let piece = pieceArray.filter(item => p == item.id);

    return piece[0].team;
}