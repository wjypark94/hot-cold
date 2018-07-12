import React from 'react';
import {connect} from 'react-redux';
import Game from './game';
import InfoSection from './info-section';
import { showGameMessage, hideGameMessage } from '../actions';

export function App(props){
    if (props.gameDescription === 'hide'){
        return (
            <div>
                <Game/>
            </div>
        )
    }
        return <InfoSection/>
}

const mapDispatchToProps = dispatch => ({
    showGameMessage: () => dispatch(showGameMessage()),
    hideGameMessage: () => dispatch(hideGameMessage())
})

const mapStateToProps = state => ({
    gameDescription: state.gameDescription
});

export default connect(mapStateToProps, mapDispatchToProps)(App);