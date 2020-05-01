import { useState } from 'react';
import { Nav, UL } from './PrimaryNavigationStyle';
import NavToggle from './NavToggle';
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from '@reach/router';

const PrimaryNavigation = (props) => {

  const [toggleState, setToggleState] = useState({ open: false });

  return (
    <Nav>
      <NavToggle
        navOpen={toggleState.open}
        onClick={() => setToggleState({ open: !toggleState.open })} />
      <UL navOpen={toggleState.open}>
        <li>
          <Link 
            to="/" 
            onClick={() => setToggleState({open: false})}>
              Home
          </Link>
        </li>
        <li>
          <Link 
            to="projects"
            onClick={() => setToggleState({open: false})}>
              Projects
          </Link>
        </li>
        <li>
          <Link 
            to="resume"
            onClick={() => setToggleState({open: false})}>
              Resume
          </Link>
        </li>
        <li><a href="//ijk.ghost.io" target="_blank" rel="noopener noreferrer nofollow">Blog</a></li>
        <li><a href="//github.com/ijkten" target="_blank" rel="noopener noreferrer nofollow">GitHub</a></li>
      </UL>
    </Nav>
  )
}

export default PrimaryNavigation;