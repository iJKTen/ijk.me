import React from 'react';
import styled from "@emotion/styled/macro";

const FooterStyled = styled.footer`
  background-color: #222;
  color: white;
  padding: 20px;
  text-align: center;
`

const Footer = (props) => {
  return (
    <FooterStyled>
      Full snack developer &copy; { new Date().getFullYear() }
    </FooterStyled>
  )
}

export default Footer;
