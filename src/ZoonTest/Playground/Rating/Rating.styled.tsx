import styled from "styled-components";

import shapeSmallStar from "../../img/shape_small_star.svg";
import starOrange from "../../img/shape_orange.svg";

const RatingContainer = styled.div<{RatingInfo?: object | null}>`
  position: relative;
  display: flex;
  width: auto;
  min-width: 0;
  height: auto;
  flex-flow: row wrap;
  justify-content: flex-start !important;
  font-family: "Roboto", sans-serif;

  &:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 15px;
    left: 0px;
    background-repeat: no-repeat;
    background-image: url(${shapeSmallStar});
    ${props => props.RatingInfo !== null && `
      background-image: url(${starOrange});
    `}
  }
`;

const RatingText = styled.div<{RatingInfo?: object | null}>`
  width: auto;
  padding-left: 21px;
  font-family: Roboto;
  font-size: 13px;
  line-height: 1.54;
  color: #bbbcc4;
  ${props => props.RatingInfo !== null && `
    color: #ffaa30;
    font-weight: 700;
  `}
  margin-right: 5px;
`;

const InfoStatus = styled.div<{ color?: string }>`
  position: relative;
  width: auto;
  padding-left: 14px;
  color: #${props => props.color};
  font-size: 13px;

  &:before {
    position: absolute;
    content: "•";
    width: 4px;
    height: 14px;
    left: 4px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:not(:last-child) {
    margin-right: 2px;
  }
`;

export {
  RatingContainer,
  RatingText,
  InfoStatus
};
