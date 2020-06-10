import { useState } from 'react';
import BurgerMenu from './BurgerMenu';
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from '@reach/router';
import styled from "@emotion/styled/macro";

export const UL = styled.ul`
  list-style: none;
  display: ${props => props.navOpen ? 'block' : 'none'};
`

export const Nav = styled.nav`
  background-color: #F6F4F4;
  padding: 10px;
  display: flex;
  justify-content: space-between;

  a,
  a:visited {
    color: blue;
  }

  & > div:first-child > div:first-child {
    color: #000;
    font-weight: bold;
    letter-spacing: 2px;
    line-height: 32px;
    font-size: 28px;
  }

  & > div:first-child > div:first-child a {
    color: #000;
  }

  @media screen and (max-width: 414px) {
    padding: 0.35em 1.25em;
    width: 100%;

    & > div:first-child {
      
    } 

    & > div:first-child > div:first-child a,
    & > div:first-child > div:first-child a:visited {
      color: #000;
      text-decoration: none;
    }

    & > div:first-child > div:first-child a:hover {
      text-decoration: underline;
    }

    ${UL} {
      margin-top: 37px;
      position: absolute;
      width: 100%;
      margin-left: -20px;
      background-color: #F6F4F4;
    }

    ${UL} li {
      text-align: center;
      padding: 1em 0px;
      border-bottom: 1px solid #000;
    }

    ${UL} li:last-child {
      border-bottom: 0px solid #000;
    }

    ${UL} li a {
      color: blue;
      text-decoration: none;
    }

    ${UL} li a :hover {
      text-decoration: underline;
    }
  }
  @media screen and (min-width: 768px) {
    & > div:first-child {
    }
    ${UL} {
      display: flex;
      margin-top: 0px;
    }
    ${UL} li {
      border-bottom: 0px solid transparent;
      padding: 6px 4px 0px 4px !important;
      font-size: 20px !important;
    }
  }
`



const PrimaryNavigation = (props) => {

  const [toggleState, setToggleState] = useState({ open: false });

  return (
    <Nav>
      <div>
        <div><Link to="/">JK</Link></div>
      </div>
      <div>
        <BurgerMenu
          navOpen={toggleState.open}
          onClick={() => setToggleState({ open: !toggleState.open })} />
      </div>
      <UL navOpen={toggleState.open}>
        <li>
          <Link
            to="/"
            onClick={() => setToggleState({ open: false })}>
            Home
          </Link>
        </li>
        <li><a href="//ijk.ghost.io" target="_blank" rel="noopener noreferrer nofollow">Blog</a></li>
        <li>
          <Link
            to="resume"
            onClick={() => setToggleState({ open: false })}>
            Resume
          </Link>
        </li>
      </UL>
    </Nav>
  )
}

export default PrimaryNavigation;