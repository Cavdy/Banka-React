import React from 'react';
import PropTypes from 'prop-types';

const button = ({value}) => {
  return (
    <input type="submit" id="submit" className="btn btn-block btn-primary" value={value} />
  )
}

button.propTypes = {
  value: PropTypes.string.isRequired,
}

export default button;
