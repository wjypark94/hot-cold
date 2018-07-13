import React from 'react';
import {connect} from 'react-redux';
import './styles/guess-count.css';

export function GuessCount(props) {
    const isPlural = props.guessCount !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';

    return (
        <h2 id="guessCount" className="guessCount">
            You've made <span id="count">{props.guessCount}</span> {guessNoun}!
        </h2>
    );
}
const mapStateToProps = state => ({
    guessCount: state.guesses.length
});
export default connect(mapStateToProps)(GuessCount);