import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';

export default function Game(props) {
  return (
    <div>
      <Header />
      <main role="main">
        <GuessSection />
        <StatusSection />
      </main>
    </div>
  );
}