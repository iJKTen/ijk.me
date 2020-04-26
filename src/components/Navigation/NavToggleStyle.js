import styled from "@emotion/styled/macro";

export const Toggle = styled.span`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 15px;
    float: right;

    & > span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      background: #cdcdcd;
      border-radius: 3px;
      z-index: 1;
    }
  }
`