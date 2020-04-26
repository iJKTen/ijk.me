import styled from "@emotion/styled/macro";

export const Toggle = styled.span`

  @media screen and (min-width: 320px) {
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    // display: flex;
    // justify-content: flex-end;
    // flex-wrap: wrap;
    // flex-direction: column;
    margin-top: 15px;
    float: right;

    & > span {
      transform: rotate(0deg);
      transition: .25s ease-in-out;
      cursor: pointer;
      display: block;
      width: 32px;
      height: 4px;
      margin-bottom: 5px;
      background: #cdcdcd;
      border-radius: 3px;
      z-index: 1;
      position: absolute;
    }

    & > span:nth-of-type(1) {
      top: ${props => props.navOpen ? '-2px' : '-4px'};
      left: ${props => props.navOpen ? '-26px' : '-26px'};
      transform-origin: left center;
      transform: ${props => props.navOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
    }

    & > span:nth-of-type(2) {
      top: 6px;
      left: -26px;
      transform-origin: left center;
      width: ${props => props.navOpen ? '0px' : '32px'};
      opacity: ${props => props.navOpen ? '0' : '1'};
    }

    & > span:nth-of-type(3) {
      top: ${props => props.navOpen ? '20px' : '16px'};
      left: ${props => props.navOpen ? '-26px' : '-26px'};
      transform-origin: left center;
      transform: ${props => props.navOpen ? 'rotate(-45deg)' : 'rotate(0deg)'};
    }
  }
`