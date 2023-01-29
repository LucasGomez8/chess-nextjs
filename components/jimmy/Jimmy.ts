export default class Jimmy{

    validateNextPosition(px: number, py: number, nx: number, ny: number, team:string, tpiece:string){
        if(team == "white"){
            switch(tpiece){
                case 'pawn':
                        console.log("lets see this data", "px:", px, "py:", py, "nx:", nx, "ny:", ny, "team:", team);
                        if((py == 1 && (py + 1 == ny || py + 2 == ny)) && nx == px){
                            return true;
                        }
                        else{
                            if(parseInt(py) + 1 == ny){
                                return true;
                            }
                        }
    
                break;
                case 'bishop':
                        console.log("lets see this data", "px:", px, "py:", py, "nx:", nx, "ny:", ny);
                        if((py < ny)){
                            return true;
                        }
                break;
    
    
                default:
                    return false;
                break;
            }
        }
        else{
            switch(tpiece){
                case 'pawn':
                        console.log("lets see this data", "px:", px, "py:", py, "nx:", nx, "ny:", ny, "team:", team);
                        if((py == 6 && (py - 1 == ny || py - 2 == ny)) && nx == px){
                            return true;
                        }
                        else{
                            if(parseInt(py) - 1 == ny){
                                return true;
                            }
                        }
                break;

                default:
                    return false;
                break;
        }

    }
}
}