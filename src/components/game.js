import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import './styles/game.css';

export default function Game(props) {
  return (
    <div>
      <Header />
      <main role="main">
        <GuessSection />
        <StatusSection />
      </main>
      <p className="made-text">
        <span>Made with </span>
        <i className="fa fa-heart fa created-by-icon" aria-hidden="true" /> By Will Park
      </p>
    </div>
  );
}