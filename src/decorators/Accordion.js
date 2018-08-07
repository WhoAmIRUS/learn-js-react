import React, { Component } from 'react';

export default OriginalComponent =>
  class Accordion extends Component {
    state = {
      openArticleId: null,
    };
    toggleOpen = openArticleId => () => {
      this.setState({ openArticleId });
    };
    render() {
      return (
        <OriginalComponent
          {...this.props}
          openArticleId={this.state.openArticleId}
          toggleOpen={this.toggleOpen}
        />
      );
    }
  };
