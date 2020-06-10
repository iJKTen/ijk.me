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
      }
      a, a:visited {
        text-decoration: none;
        color: #0000FF;
      }
      .violet, a.violet {
        color: #EE82EE;
        fill: #EE82EE;
      }
      .indigo, a.indigo {
        color: #4B0082;
        fill: #4B0082;
      }
      .blue, a.blue {
        color: #0000FF;
        fill: #0000FF;
      }
      .green, a.green {
        color: #008000;
        fill: #008000;
      }
      .yellow, a.yellow {
        color: #999900;
        fill: #999900;
      }
      .orange, a.orange {
        color: #FF4500;
        fill: #FF4500;
      }
      .red, a.red {
        color: #FF0000;
        fill: #FF0000;
      }
      #root main {
        padding: 20px;
        line-height: 28px;
        font-size: 18px;
      }
      @media screen and (min-width: 320px) {
        svg {
          width: 20px;
          height: 20px;
        }
      }
      @media screen and (min-width: 375px) {
        svg {
          width: 24px;
          height: 24px;
        }
      }
      @media screen and (min-width: 414px) {
        svg {
          width: 32px;
          height: 32px;
        }
      }
      @media screen and (min-width: 768px) {
        #root main {
          width: 768px;
          margin: 0px auto;
          background-color: #FFF;
          min-height: 100vh;
          padding-bottom: 40px;
          position: relative;
        }
      }
    `}
  />
)