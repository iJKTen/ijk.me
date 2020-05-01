import React from 'react';
import { Div, Span } from './BurgerMenuStyle';

const BurgerMenu = (props) => {
  return (
    <Div 
      onClick={props.onClick}
      {...props}
    >
      <Span />
      <Span />
      <Span />
    </Div>
  )
}

export default BurgerMenu;
