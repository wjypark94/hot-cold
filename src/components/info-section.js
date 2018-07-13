import React from 'react';
import './styles/info-section.css';
import {connect} from 'react-redux';
import {showGameMessage, hideGameMessage} from '../actions';

export function InfoSection(props) {

  const rules =[
    "I pick a random secret number between 1 to 100 and keep it hidden.",
    "You need to guess until you can find the hidden secret number.",
    'You will get feedback on how close ("hot") or far ("cold") your guess is.',
    'When you get the number you will see the message "You Got It".'
  ];

  return (
    <section id="what" tabIndex="-1" className="description">
      <h2 className="description-header">What do I do?</h2>
      <p className="header-text">
       Hot or Cold Number Guessing Game
       <br/>
       The game goes like this:
      </p>
        <ul>
            {rules.map(li => <li>{li}</li>)}
        </ul>

      <h2 className="info-header">So, are you ready?</h2>
      <button onClick={props.hideGameMessage} className="info-button">Got it</button>
    </section>
  );
}

const mapDispatchToProps = dispatch => ({
    hideGameMessage: () => dispatch(hideGameMessage())
});
  
const mapStateToProps = state => ({
    gameDescription: state.gameDescription
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoSection);
