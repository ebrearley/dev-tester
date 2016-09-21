import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class HomePageHeader extends Component {
  render = () => {
    return (
      <Jumbotron>
        <h1>Have what it takes to join Inlight?</h1>
        <p>Here's some sweet code! Or maybe not so sweet after all.</p>
      </Jumbotron>
    );
  }
}

module.exports = HomePageHeader;
