import { useState } from 'react';
import { Nav, UL } from './PrimaryNavigationStyle';
import BurgerMenu from './BurgerMenu';
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from '@reach/router';

const PrimaryNavigation = (props) => {

  const [toggleState, setToggleState] = useState({ open: false });

  return (
    <Nav>
      <div>
        <div><Link to="/">JK</Link></div>
        <BurgerMenu
          navOpen={toggleState.open}
          onClick={() => setToggleState({ open: !toggleState.open })} />
      </div>
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
            to="resume"
            onClick={() => setToggleState({open: false})}>
              Resume
          </Link>
        </li>
        <li><a href="//ijk.ghost.io" target="_blank" rel="noopener noreferrer nofollow">Blog</a></li>
        <li><a href="//twitter.com/iJKTen" target="_blank" rel="noopener noreferrer nofollow">Twitter</a></li>
        <li><a href="//github.com/ijkten" target="_blank" rel="noopener noreferrer nofollow">GitHub</a></li>
      </UL>
    </Nav>
  )
}

export default PrimaryNavigation;