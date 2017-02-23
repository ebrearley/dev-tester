import React from 'react';
import ReactDom from 'react-dom';
import LandingPage from './pages/home';

const reactDiv = document.getElementById('app');

ReactDom.render(<LandingPage />, reactDiv);
