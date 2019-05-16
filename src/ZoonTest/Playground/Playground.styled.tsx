import styled from "styled-components";

import shapeDots from "../img/shape_dots.svg";
import shapeBell from "../img/shape_bell.svg";

const PlaygroundContainer = styled.div<{ isActive: boolean }>`
  position: relative;
  display: block;
  max-width: 100%;
  min-height: 20px;
  height: auto;
  padding: 15px 20px 15px 29px;
  border-radius: 4px;
  border: solid 1px #e6ecf2;
  background-color: #ffffff;
  font-family: "Roboto", sans-serif;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:after {
    position: absolute;
    top: 0px;
    left: 0px;
    content: "";
    background-color: #5a39a7;
    width: 4px;
    height: 100%;

    ${props => !props.isActive && `
      background-color: #cedae6;
    `}
  }

  @media (max-width: 640px) {
    min-height: 236px;
    padding: 15px 40px 15px 29px;
  }
  @media (max-width: 510px) {
    min-height: 272px;
    padding: 15px 40px 15px 29px;
  }
`;

const MenuToggle = styled.div`
  position: absolute;
  right: 20px;
  top: 22px;
  width: 4px;
  height: 18px;
  background-image: url(${shapeDots});
  cursor: pointer;
`;


const HeaderRow = styled.div`
  max-width: 100%;
  min-width: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;

  & > * {
    margin-bottom: 3px;
  }
`;

const Name = styled.div<{ isActive: boolean }>`
  font-size: 16px;
  line-height: 25px;
  font-weight: 700;
  margin-right: 5px;
  color: #222222;

  ${props => !props.isActive && `
    color: #bbbcc4;
  `}
`;

const InfoContainer = styled.div`
  display: flex;
  width: auto;
  flex-flow: row wrap;
  justify-content: flex-start;
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

const GreyText = styled.div`
  font-family: Roboto;
  font-size: 13px;
  line-height: 1.54;
  color: #bbbcc4;
`;

const ActionRequired = styled.div`
  position: absolute;
  bottom: 14px;
  right: 18px;
  width: 146px;
  height: 28px;
  padding: 0 10px 0 21px;
  border-radius: 4px;
  background-color: #ffaa30;
  color: #ffffff;
  font-size: 13px;
  line-height: 28px;
  text-align: right;

  &:before {
    position: absolute;
    content: "";
    width: 12px;
    height: 14px;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url(${shapeBell});
  }
`;

const Updates = styled.div`
  position: absolute;
  bottom: 14px;
  right: 18px;
  font-size: 13px;
  color: #694caf;
  text-align: right;
`;

export {
  PlaygroundContainer,
  HeaderRow,
  Name,
  InfoContainer,
  InfoStatus,
  MenuToggle,
  GreyText,
  ActionRequired,
  Updates
};
