import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import HomePageHeader from '../../components/home-page-header';
import CodeBlock from '../../components/code-block';

export default class HomePage extends Component {
  render = () => {
    return (
      <div>
        <Grid>
          <Row>
            <Col>
              <HomePageHeader />
              <CodeBlock />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

module.exports = HomePage;
