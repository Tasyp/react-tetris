import React from 'react';
import Gameboard from './Gameboard';
import * as Game from '../models/Game';
import HeldPiece from './HeldPiece';
import PieceQueue from './PieceQueue';
import { Context } from '../context';
var noOp = function (t) { return t; };
// https://harddrop.com/wiki/Tetris_Worlds#Gravity
var tickSeconds = function (level) {
    return Math.pow((0.8 - (level - 1) * 0.007), (level - 1));
};
export default function Tetris(props) {
    var _a = React.useReducer(Game.update, Game.init(props.matrix)), game = _a[0], dispatch = _a[1];
    var level = Game.getLevel(game);
    React.useEffect(function () {
        var interval;
        if (game.state === 'PLAYING') {
            interval = window.setInterval(function () {
                dispatch('TICK');
            }, tickSeconds(level) * 1000);
        }
        return function () {
            window.clearInterval(interval);
        };
    }, [game.state, level]);
    React.useEffect(function () {
        if (game.matrix === props.matrix) {
            return;
        }
        dispatch({ type: "REPLACE_GAME", game: { matrix: props.matrix } });
    }, [dispatch, props.matrix]);
    var controller = React.useMemo(function () { return ({
        pause: function () { return dispatch('PAUSE'); },
        resume: function () { return dispatch('RESUME'); },
        hold: function () { return dispatch('HOLD'); },
        hardDrop: function () { return noOp; },
        moveDown: function () { return noOp; },
        moveLeft: function () { return noOp; },
        moveRight: function () { return noOp; },
        flipClockwise: function () { return dispatch('FLIP_CLOCKWISE'); },
        flipCounterclockwise: function () { return dispatch('FLIP_COUNTERCLOCKWISE'); },
        restart: function () { return dispatch('RESTART'); }
    }); }, [dispatch]);
    return (React.createElement(Context.Provider, { value: game }, props.children({
        HeldPiece: HeldPiece,
        Gameboard: Gameboard,
        PieceQueue: PieceQueue,
        points: game.points,
        linesCleared: game.lines,
        state: game.state,
        level: level,
        controller: controller
    })));
}
