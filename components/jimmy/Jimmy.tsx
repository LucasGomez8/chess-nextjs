import { ValidatePawnMoves } from "../movementrules/Pawn";
import { validateBishopMoves } from "../movementrules/Bishop";
import { validateRookMoves } from "../movementrules/Rook";
import { validateKnightMoves } from "../movementrules/Knight";
import { validateQueenMovements } from "../movementrules/Queen";

export default class Jimmy{

    validateNextPosition(px: number, py: number, nx: number, ny: number, team: string, tpiece:string, positions: any, loseAPiece){
            switch(tpiece){
                case 'pawn':
                    return ValidatePawnMoves(py, px, nx, ny, team, positions, loseAPiece);
                    
                case 'bishop':
                    return validateBishopMoves(py, px, nx, ny, team, positions, loseAPiece);
                
                case 'rook':
                    return validateRookMoves(py, px, nx, ny, team, positions, loseAPiece);
                
                case 'knight':
                    return validateKnightMoves(py, px, nx, ny, team, positions, loseAPiece);
                case 'queen':
                    return validateQueenMovements(py, px, nx, ny, team, positions, loseAPiece); 
                    default:
                    return false;
            }
    }
}
