import styled from "@emotion/styled/macro";

export const UL = styled.ul`
  list-style: none;
  display: ${props => props.navOpen ? 'block' : 'none'};
`
export const Nav = styled.nav`
  @media screen and (min-width: 320px) {
    background-color: white;
    padding: 0.35em 1.25em;
    min-height: 60px;
    position: absolute;
    width: 100%;
    z-index: 2;
    border-bottom: 1px solid red;

    & > div:first-child {
      display: flex;
      justify-content: space-between;
    } 

    & > div:first-child > div:first-child {
      padding-top: 6px;
      color: red;
      font-weight: bold;
      letter-spacing: 2px;
      line-height: 32px;
      font-size: 28px;
    }

    & > div:first-child > div:first-child a,
    & > div:first-child > div:first-child a:visited {
      color: red;
      text-decoration: none;
    }

    & > div:first-child > div:first-child a:hover {
      text-decoration: underline;
    }

    ${UL} {
      margin-top: 40px;
    }

    ${UL} li {
      text-align: center;
      padding: 1em 0px;
      border-bottom: 1px solid #EAB9B9;
    }

    ${UL} li:last-child {
      border-bottom: 0px solid #EAB9B9;
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
      float: left;
    }

    ${UL} {
      display: block;
      margin-top: 0px;
      float: right;
    }

    ${UL} li {
      float: left;
      border-bottom: 0px solid transparent;
      padding: 6px 4px 0px 4px !important;
      font-size: 20px !important;
    }
  }
`
