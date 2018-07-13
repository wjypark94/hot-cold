import React from 'react';
import {connect} from 'react-redux';
import Game from './game';
import InfoSection from './info-section';
import { showGameMessage, hideGameMessage } from '../actions';
import ParticlesEffect from './Particles';

export function App(props){
    if (props.gameDescription === 'hide'){
        return (
            <div>
                <Game/>
                <ParticlesEffect/>
            </div>
            
        )
    }
        return (
            <div>
                <InfoSection/>
                <ParticlesEffect/>
             </div>
        )
}

const mapDispatchToProps = dispatch => ({
    showGameMessage: () => dispatch(showGameMessage()),
    hideGameMessage: () => dispatch(hideGameMessage())
})

const mapStateToProps = state => ({
    gameDescription: state.gameDescription
});

export default connect(mapStateToProps, mapDispatchToProps)(App);