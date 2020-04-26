import React from 'react';
import { Toggle } from './NavToggleStyle';

const NavToggle = (props) => {
  return (
    <Toggle>
      <span className="nav-toggle"></span>
      <span className="nav-toggle"></span>
      <span className="nav-toggle"></span>
    </Toggle>
  )
}

export default NavToggle;
