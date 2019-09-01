import React from 'react';
import Loader from 'react-loader-spinner';

export default function loader() {
  return (
    <div className="loader">
      <Loader
        type="Circles"
        color="#03A9F4"
        height={100}
        width={100}
      />
    </div>
  );
}
