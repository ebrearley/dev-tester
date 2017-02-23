import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import HomePageHeader from '../../components/home-page-header';
import CodeBlock from '../../components/code-block';

export default class LandingPage extends Component {
  render = () => {
    return (
      <div className="landing">
        <Grid>
          <Row>
            <Col>
              <h1>Want to work at inlight!</h1>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

module.exports = LandingPage;
