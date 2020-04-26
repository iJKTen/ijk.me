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
      body {
        font-family: Helvetica, 'sans-serif';
      }
      @media screen and (min-width: 320px) {
        main {
          margin-top: 60px;
          position: absolute;
        }
      }
      @media screen and (min-width: 900px) {
        font-size: 18px;
      }
        
      @media screen and (min-width: 1200px) {
        font-size: 20px;
      }
    `}
  />
)