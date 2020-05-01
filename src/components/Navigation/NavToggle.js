import React from 'react';
import { BurgerMenu, BurgerMenuItem } from './NavToggleStyle';

const NavToggle = (props) => {
  return (
    <BurgerMenu 
      onClick={props.onClick}
      {...props}
    >
      <BurgerMenuItem />
      <BurgerMenuItem />
      <BurgerMenuItem />
    </BurgerMenu>
  )
}

export default NavToggle;
