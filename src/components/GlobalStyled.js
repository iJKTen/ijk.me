import { Global, css } from '@emotion/core';
import React from 'react';

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      * {
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
      }
      html {
        height: 100%;
      }
      body {
        font-family: Helvetica, 'sans-serif';
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: white;
      }
      header {
        position: fixed;
        width: 100%;
      }
      h1, h2, h3, h4 {
        color: #ff6700;
        line-height: 32px;
        border-bottom: 1px solid #FFB7AA;
        padding-bottom: 4px;
      }
      a, a:link, a:visited {
        color: blue;
      }
      @media screen and (min-width: 320px) {
        main {
          padding: 80px 20px 20px 20px;
          line-height: 30px;
          font-size: 1.125em;
          height: 100%;
        }
        main p {
          margin: 15px 0px;
        }
      }
      @media screen and (min-width: 900px) {
        body {
          font-size: 18px;
        }
      }
        
      @media screen and (min-width: 1200px) {
        body {
          font-size: 20px;
          line-height: 32px;
        }
        body main {
          width: 1000px;
          margin: 0px auto;
        }
        main p {
          line-height: 32px;
        }
      }
    `}
  />
)