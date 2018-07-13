import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import './styles/game.css';

export default function Game(props) {
  return (
    <div className="game-board">
      <Header />
      <main role="main">
        <GuessSection />
        <StatusSection />
      </main>
      <p className="made-text">
        <span>Made with </span>
        <i className="fa fa-coffee" aria-hidden="true"></i>
        <i className="fa fa-spotify" aria-hidden="true"></i>
        <i className="fa fa-heart fa created-by-icon" aria-hidden="true" />
        <br/>
        <a href="https://www.linkedin.com/in/wjypark/" target="blank" name="linkedin" className="contact-name">
         By Will Park
        </a>
      </p>
    </div>
  );
}