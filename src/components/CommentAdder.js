import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addComment } from '../AC';

const MIN_USERNAME_LENGTH = 5;
const MAX_USERNAME_LENGTH = 15;
const MIN_TEXT_LENGTH = 20;
const MAX_TEXT_LENGTH = 50;

const Input = styled.input`
  border: ${props => `1px solid ${props.isError ? 'red' : 'green'}`};
  &:focus {
    outline: none;
  }
`;

class CommentAdder extends Component {
  static propTypes = {
    addComment: PropTypes.func,
    article: PropTypes.object,
  };
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
    return inputLength < minLength || inputLength > maxLength;
  };
  addComment = () => {
    const { userName, text } = this.state;
    const { addComment, article } = this.props;
    if (this.isError('userName', MIN_USERNAME_LENGTH, MAX_USERNAME_LENGTH) || this.isError('text', MIN_TEXT_LENGTH, MAX_TEXT_LENGTH)) return;
    addComment(article.id, userName, text);
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
            isError={this.isError('userName', MIN_USERNAME_LENGTH, MAX_USERNAME_LENGTH)}
          />
        </label>
        <label htmlFor="text">
          Text:
          <Input
            value={this.state.text}
            onChange={this.changeInput('text')}
            isError={this.isError('text', MIN_TEXT_LENGTH, MAX_TEXT_LENGTH)}
          />
        </label>
        <button onClick={this.addComment}>Add comment</button>
      </div>
    );
  }
}

export default connect(null, { addComment })(CommentAdder);
