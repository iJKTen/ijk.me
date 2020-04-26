import styled from "@emotion/styled/macro";

export const UL = styled.ul`
  list-style: none
`
export const Nav = styled.nav`
  @media screen and (min-width: 320px) {
    background-color: #222;
    padding: 0.35em 1.25em;

    ${UL} {
      margin-top: 40px;
    }

    ${UL} li {
      text-align: center;
      padding: 1em 0px;
      border-bottom: 1px solid #444;
    }

    ${UL} li:last-child {
      border-bottom: 0px solid #444;
    }

    ${UL} li a {
      color: white;
      text-decoration: none;
    }

    ${UL} li a :hover {
      text-decoration: underline;
    }
  }
`
