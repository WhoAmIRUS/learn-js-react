import React, { Component } from 'react';

export default OriginalComponent =>
  class Accordion extends Component {
    state = {
      openItemId: null,
    };
    toggleOpenItem = openItemId => () => {
      if (this.state.openItemId === openItemId) {
        this.setState({ openItemId: null });
      } else {
        this.setState({ openItemId });
      }
    };
    render() {
      return (
        <OriginalComponent
          {...this.props}
          openItemId={this.state.openItemId}
          toggleOpenItem={this.toggleOpenItem}
        />
      );
    }
  };
