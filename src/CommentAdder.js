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
  addComment = () => {
    const { userName, text } = this.state;
    console.log(userName, text);
    this.setState(this.getInitialState());
  };
  changeInput = (name, minLength, maxLength) => ev => {
    const inputLength = ev.target.value.length;
    if (inputLength < minLength || inputLength > maxLength) {
      this.setState({
        error: {
          [name]: true,
        },
      });
    } else {
      this.setState({
        error: {
          [name]: false,
        },
      });
    }
    this.setState({
      [name]: ev.target.value,
    });
  };
  render() {
    return (
      <div>
        <label htmlFor="userName">
          Name:
          <Input
            value={this.state.userName}
            onChange={this.changeInput('userName', 5, 15)}
            isError={this.state.error ? this.state.error.userName : null}
          />
        </label>
        <label htmlFor="text">
          Text:
          <Input
            value={this.state.text}
            onChange={this.changeInput('text', 20, 50)}
            isError={this.state.error ? this.state.error.text : null}
          />
        </label>
        <button onClick={this.addComment}>Add comment</button>
      </div>
    );
  }
}
