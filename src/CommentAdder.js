import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: ${props => `1px solid ${props.isError ? 'red' : 'green'}`};
  &:focus {
    outline: none;
  }
`;

export default class CommentAdder extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      userName: '',
      text: '',
    };
  }
  isError = (type, minLength, maxLength) => {
    const inputLength = this.state[type].length;
    console.log(type, inputLength);
    return inputLength < minLength || inputLength > maxLength;
  };
  addComment = () => {
    const { userName, text } = this.state;
    console.log(userName, text);
    this.setState(this.getInitialState());
  };
  changeInput = type => ev => {
    this.setState({
      [type]: ev.target.value,
    });
  };
  render() {
    return (
      <div>
        <label htmlFor="userName">
          Name:
          <Input
            value={this.state.userName}
            onChange={this.changeInput('userName')}
            isError={this.isError('userName', 5, 15)}
          />
        </label>
        <label htmlFor="text">
          Text:
          <Input
            value={this.state.text}
            onChange={this.changeInput('text')}
            isError={this.isError('text', 20, 50)}
          />
        </label>
        <button onClick={this.addComment}>Add comment</button>
      </div>
    );
  }
}
