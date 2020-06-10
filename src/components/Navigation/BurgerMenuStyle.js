import styled from "@emotion/styled/macro";

export const Span = styled.span`
  transform-origin: left center;
  left: -32px;
`

export const Div = styled.div`

  @media screen and (max-width: 414px) {
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    margin-top: 8px;

    & > ${Span} {
      transform: rotate(0deg);
      transition: .25s ease-in-out;
      cursor: pointer;
      display: block;
      width: 32px;
      height: 4px;
      margin-bottom: 5px;
      background: #000;
      border-radius: 3px;
      z-index: 1;
      position: absolute;
    }

    & > ${Span}:nth-of-type(1) {
      top: ${props => props.navOpen ? '-2px' : '-4px'};
      transform: ${props => props.navOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
    }

    & > ${Span}:nth-of-type(2) {
      top: 6px;
      width: ${props => props.navOpen ? '0px' : '32px'};
      opacity: ${props => props.navOpen ? '0' : '1'};
    }

    & > ${Span}:nth-of-type(3) {
      top: ${props => props.navOpen ? '21px' : '16px'};
      transform: ${props => props.navOpen ? 'rotate(-45deg)' : 'rotate(0deg)'};
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`