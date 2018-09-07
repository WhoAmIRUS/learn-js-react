import React from 'react';
import PropTypes from 'prop-types';

const LocalizedText = (props, context) => {
  return (
    <span>
      {context.dictionary ? context.dictionary[props.children] : props.children}
    </span>
  );
};

LocalizedText.propTypes = {};

LocalizedText.contextTypes = {
  dictionary: PropTypes.object,
};

export default LocalizedText;
