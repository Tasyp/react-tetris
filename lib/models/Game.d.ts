import { Matrix, PositionedPiece, Piece } from './Matrix';
import * as PieceQueue from '../modules/piece-queue';
export declare type State = 'PAUSED' | 'PLAYING' | 'LOST';
declare type HeldPiece = {
    available: boolean;
    piece: Piece;
};
export declare type Game = {
    state: State;
    matrix: Matrix;
    piece: PositionedPiece;
    heldPiece: HeldPiece | undefined;
    queue: PieceQueue.PieceQueue;
    points: number;
    lines: number;
};
export declare const getLevel: (game: Game) => number;
export declare type Action = 'PAUSE' | 'RESUME' | 'TOGGLE_PAUSE' | 'TICK' | 'HOLD' | 'HARD_DROP' | 'MOVE_DOWN' | 'MOVE_LEFT' | 'MOVE_RIGHT' | 'FLIP_CLOCKWISE' | 'FLIP_COUNTERCLOCKWISE' | 'RESTART' | {
    type: 'REPLACE_GAME';
    game: Partial<Game>;
};
export declare const update: (game: Game, inputAction: Action) => Game;
export declare const init: () => Game;
export declare function viewMatrix(game: Game): Matrix;
export {};
