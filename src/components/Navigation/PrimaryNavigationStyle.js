import styled from "@emotion/styled/macro";

export const UL = styled.ul`
  list-style: none
`
export const Nav = styled.nav`
  @media screen and (min-width: 320px) {
    background-color: #0d2c54;
    padding: 0.35em 1.25em;
    min-height: 60px;
    position: absolute;
    width: 100%;
    z-index: 2;

    ${UL} {
      margin-top: 40px;
      display: ${props => props.navOpen ? 'block' : 'none'};
    }

    ${UL} li {
      text-align: center;
      padding: 1em 0px;
      border-bottom: 1px solid #1b4965;
    }

    ${UL} li:last-child {
      border-bottom: 0px solid #1b4965;
    }

    ${UL} li a {
      color: white;
      // font-weight: bold;
      text-decoration: none;
    }

    ${UL} li a :hover {
      text-decoration: underline;
    }
  }
`
