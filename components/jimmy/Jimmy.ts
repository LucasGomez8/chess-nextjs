export default class Jimmy{

    validateNextPosition(px: number, py: number, nx: number, ny: number, team:string, tpiece:string){
        switch(tpiece){
            case 'pawn':
                if(team == 'white'){
                    if((py == 1 && (py + 1 == ny || py + 2 == ny)) && nx == px){
                        return true;
                    }
                    else{
                        if(py + 1 == ny){
                            return true;
                        }
                    }
                }

            break;


            default:
                return false;
            break;
        }
    }
}