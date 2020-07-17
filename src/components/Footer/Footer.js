import React from 'react';
import styled from "@emotion/styled/macro";

const FooterStyled = styled.footer`
  text-align: center;
  font-size: 16px;
  width: 100%;
  margin-top: 20px;

  section {
    text-align: center;
  }

  div {
    display: inline-block;
    line-height: 24px;
    vertical-align: top;
    padding-right: 8px;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

const Footer = (props) => {
  return (
    <FooterStyled>
      <section>
        <div>Made with</div><svg role='img' className="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Love</title><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" /></svg>
      </section>
    </FooterStyled>
  )
}

export default Footer;
