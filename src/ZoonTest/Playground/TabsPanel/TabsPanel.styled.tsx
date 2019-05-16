import styled from "styled-components";

import shapeLoading from "../../img/shape_small_loading.svg";
import shapeTick from "../../img/shape_tick.svg";
import shapeTickWhite from "../../img/shape_tick_white.svg";

const Container = styled.div`
  display: flex;
  width: auto;
  max-width: 100%;
  min-width: 0;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  font-family: "Roboto", sans-serif;
  margin-bottom: 16px;
`;

const TabItem = styled.div`
  position: relative;
  width: auto;
  min-height: 28px;
  padding: 0 10px 0 24px;
  border-radius: 4px;
  border: solid 1px #e6ecf2;
  background-color: #ffffff;
  color: #222222;
  font-size: 13px;
  line-height: 28px;
  margin-bottom: 5px;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 10px;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url(${shapeTick});
  }
`;

const SyncTab = styled(TabItem)<{isSynced: boolean}>`
  padding: 0 10px 0 30px;
  &:before {
    width: 12px;
    height: 16px;
    background-size: 100%;
    background-image: url(${shapeLoading});
  }
      ${props => props.isSynced && `
        padding: 0 10px 0 24px;
        background-color: #5a39a7;
        color: #ffffff;

        &:before {
          width: 8px;
          height: 10px;
          background-image: url(${shapeTickWhite});
        }
      `};
  }
`;

export {
  Container,
  TabItem,
  SyncTab
};
