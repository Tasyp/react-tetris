import React from 'react';
import * as Game from '../models/Game';
import { Matrix } from '../models/Matrix';
export declare type RenderFn = (params: {
    HeldPiece: React.ComponentType;
    Gameboard: React.ComponentType;
    PieceQueue: React.ComponentType;
    points: number;
    linesCleared: number;
    level: number;
    state: Game.State;
    controller: Controller;
}) => React.ReactElement;
export declare type Controller = {
    pause: () => void;
    resume: () => void;
    hold: () => void;
    hardDrop: () => void;
    moveDown: () => void;
    moveLeft: () => void;
    moveRight: () => void;
    flipClockwise: () => void;
    flipCounterclockwise: () => void;
    restart: () => void;
};
declare type Props = {
    matrix?: Matrix;
    children: RenderFn;
};
export default function Tetris(props: Props): JSX.Element;
export {};
