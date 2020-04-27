import { useState } from 'react';
import { Nav, UL } from './PrimaryNavigationStyle';
import NavToggle from './NavToggle';
/** @jsx jsx */
import { jsx } from '@emotion/core'

const PrimaryNavigation = (props) => {

  const [toggleState, setToggleState] = useState({ open: false });

  return (
    <Nav>
      <NavToggle
        navOpen={toggleState.open}
        onClick={() => setToggleState({ open: !toggleState.open })} />
      <UL
        css={{
          display: toggleState.open ? 'block' : 'none'
        }}
      >
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="//ijk.ghost.io" target="_blank" rel="noopener noreferrer nofollow">Blog</a></li>
        <li><a href="//github.com/ijkten" target="_blank" rel="noopener noreferrer nofollow">GitHub</a></li>
      </UL>
    </Nav>
  )
}

export default PrimaryNavigation;