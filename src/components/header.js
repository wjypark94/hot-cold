import React from 'react';

import TopNav from './top-nav';
import './styles/header.css';

export default function Header(props) {
  return (
    <header>
      <TopNav />
      <h1 className="game-header">HOT or COLD</h1>
    </header>
  );
}