import React from 'react';
import {connect} from 'react-redux';
import {generateAuralUpdate, restartGame} from '../actions';
import './styles/top-nav.css';
import { showGameMessage, hideGameMessage } from "../actions";

export function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a onClick={props.showGameMessage} className="what" aria-label="How to play">
                        What?
                    </a>
                </li>
                <li>
                    <a
                        className="new"
                        aria-label="Start a new game"
                        onClick={props.restartGame}>
                        + New Game
                    </a>
                </li>
                <li>
                    <a
                        href="#get-status"
                        /* the `visuallyhidden` class hides an element 
            while leaving it available to screen reader users  */
                        className="visuallyhidden focusable status-link"
                        onClick={props.generateAuralUpdate}>
                        Hear state of game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

const mapDispatchToProps = dispatch => ({
    showGameMessage: () => dispatch(showGameMessage()),
    hideGameMessage: () => dispatch(hideGameMessage()),
    restartGame: () => dispatch(restartGame(Math.floor(Math.random() * 100) + 1)),
    generateAuralUpdate: () => dispatch(generateAuralUpdate())
});

const mapStateToProps = state => ({
    gameDescription: state.gameDescription
});


export default connect(mapStateToProps, mapDispatchToProps)(TopNav);