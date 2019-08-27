import React from 'react';
import PropTypes from 'prop-types';

export default function notification({ data, style }) {
  let classes;
  if (data !== '' && data !== undefined) {
    classes = `notify ${style} notify-show`;
  } else {
    classes = 'notify'
  }
  return (
    <div className={classes}>
      {data}
    </div>
  );
}

notification.propTypes = {
  data: PropTypes.string,
  style: PropTypes.string,
  offLoader: PropTypes.func,
}
