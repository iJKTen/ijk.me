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
        background-color: #ebebeb;
      }
      main {
        flex: 1 0 auto;
      }
      footer {
        flex-shrink: 0;
      }
      h1, h2, h3, h4 {
        color: #ff6700;
      }
      @media screen and (min-width: 320px) {
        main {
          padding: 80px 20px 20px 20px;
          line-height: 28px;
          font-size: 1.125em;
        }
        main p {
          margin: 10px 0px;
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
          width: 1100px;
          margin: 0px auto;
        }
        main p {
          line-height: 32px;
        }
      }
    `}
  />
)