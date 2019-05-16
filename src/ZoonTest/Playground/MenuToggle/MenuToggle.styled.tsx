import styled from "styled-components";

import shapeDots from "../../img/shape_dots.svg";
import shapeDotsActive from "../../img/dots-active.svg";

const MenuContainer = styled.div<{ isOpen: boolean;}>`
  position: absolute;
  right: 20px;
  top: 22px;
  width: 4px;
  height: 18px;
  background-repeat: no-repeat;
  background-image: url(${shapeDots});
  font-family: "Roboto", sans-serif;

  ${props => props.isOpen && `
    background-image: url(${shapeDotsActive});
  `}
`;

const Modal = styled.div<{ visible: boolean;}>`
  position: absolute;
  z-index: 2;
  width: 117px;
  height: 60px;
  top: 32px;
  right: -31px;
  background: #ffffff;
  border-radius: 4px;
  border: solid 1px #e8e8e8;

  &:after, &:before {
  	bottom: 100%;
  	right: 24px;
  	border: solid transparent;
  	content: " ";
  	height: 0;
  	width: 0;
  	position: absolute;
  	pointer-events: none;
  }

  &:after {
  	border-color: rgba(255, 255, 255, 0);
  	border-bottom-color: #ffffff;
  	border-width: 7px;
  	margin-left: -7px;
  }
  &:before {
  	border-color: rgba(232, 232, 232, 0);
  	border-bottom-color: #e8e8e8;
  	border-width: 8px;
  	margin-left: -8px;
  }

  ${props => !props.visible && `
    display: none;
  `}
`;

const Action = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 16px;
  color: #694caf;
  cursor: pointer;
`;

export {
  MenuContainer,
  Modal,
  Action
};
