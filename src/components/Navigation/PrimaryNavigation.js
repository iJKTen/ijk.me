import React from 'react';
import { Nav, UL } from './PrimaryNavigationStyle';
import NavToggle from './NavToggle';

const PrimaryNavigation = (props) => {
  return (
    <div>
      <Nav>
        <NavToggle />
        <UL>
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/resume">Resume</a></li>
        </UL>
      </Nav>
    </div>
  )
}

export default PrimaryNavigation;