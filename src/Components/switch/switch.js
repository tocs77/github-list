import React from 'react';

import './switch.css';

const Switch = (props) => {
  return (
    <label className='switch'>
      <input type='checkbox' onChange={props.changed}></input>
      <span className='slider round'></span>
    </label>
  );
};

export default Switch;
