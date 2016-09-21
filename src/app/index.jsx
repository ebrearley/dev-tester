import React from 'react';
import ReactDom from 'react-dom';
import HomePage from './pages/home';

const reactDiv = document.getElementById('app');

ReactDom.render(<HomePage />, reactDiv);
