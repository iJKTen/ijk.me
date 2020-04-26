import React from 'react';
import { Toggle } from './NavToggleStyle';

const NavToggle = (props) => {
  return (
    <Toggle 
      onClick={props.onClick}
      {...props}
    >
      <span className="nav-toggle"></span>
      <span className="nav-toggle"></span>
      <span className="nav-toggle"></span>
    </Toggle>
  )
}

export default NavToggle;
