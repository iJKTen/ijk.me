import React from 'react';
import styled from "@emotion/styled/macro";

const FooterStyled = styled.footer`
  background-color: white;
  color: black;
  padding: 20px;
  text-align: center;
  border-top: 1px solid red;
`

const Footer = (props) => {
  return (
    <FooterStyled>
      Full snack developer &copy; { new Date().getFullYear() }
    </FooterStyled>
  )
}

export default Footer;
