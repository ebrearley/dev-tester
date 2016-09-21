import React, { Component } from 'react';
import {
  FormGroup,
  FormControl,
  Button,
  Panel,
  Modal } from 'react-bootstrap';
import parseJson from 'parse-json';

import codeService from '../../model/code';
import originalCode from './code.js';

const data = {};

export default class CodeBlock extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      validationResponse: {
        hasBeenValidatedOnce: false,
        success: false,
        message: '',
      },
      showModal: false,
    };

    this.validationCallback = this.validationCallback.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  validationCallback(reply) {
    const details = parseJson(reply.currentTarget.response);

    this.setState({
      validationResponse: {
        hasBeenValidatedOnce: true,
        success: details.success,
        message: details.message,
      },
    });
    this.openModal();
  }

  handleCodeCheck = () => {
    const { userCode } = data;
    codeService.validate(userCode, this.validationCallback);
  }

  handleCodeChange = (event) => {
    data.userCode = event.target.value;
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  openModal() {
    this.setState({ showModal: true });
  }

  render() {
    const { validationResponse, showModal } = this.state;

    const modal = {
      title: 'Code response',
      message: '',
    };

    let bsStyle = 'primary';

    if (validationResponse.hasBeenValidatedOnce) {
      modal.title = validationResponse.success ? 'Yay you did it!' : 'Oh oooo!';
      modal.message = validationResponse.message;
      bsStyle = validationResponse.success ? 'success' : 'danger';
    }

    return (
      <div>
        <Modal show={showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{modal.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{modal.message}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>

        <p>We enjoy the occasional late night, especially when Christina brings Dilemma for us all to play.
        But sometimes a sleepy programmer can make a silly mistake or two, or three.</p>
        <p>Please help us! We really like our software to be beautiful!</p>
        <Panel header="It's time to get our hands dirty! (Shut up guys, you know what I mean)" bsStyle="primary">
          <Panel header="Program requirements">
            <ul>
              <li>Must export a Node.js module</li>
              <li>Exported module must be an object with a function called concatinate.</li>
              <li>Function must have three parameters, first two are input strings, the third is a callback</li>
              <li>The function must callback the first two parameters concatinated</li>
            </ul>
          </Panel>
          <Panel header="The code" bsStyle={bsStyle}>
            <form>
              <FormGroup controlId="formControlsTextarea">
                <FormControl
                  componentClass="textarea"
                  placeholder="the good stuff"
                  defaultValue={originalCode.trim()}
                  onChange={this.handleCodeChange}
                />
              </FormGroup>
            </form>
          </Panel>
          <Button onClick={this.handleCodeCheck} bsStyle="primary">Check my code!</Button>
        </Panel>
        <Button bsStyle="success" bsSize="large">Join Inlight!</Button>
      </div>
    );
  }
}

module.exports = CodeBlock;
