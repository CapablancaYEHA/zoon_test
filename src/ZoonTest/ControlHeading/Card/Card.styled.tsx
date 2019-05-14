import styled from "styled-components";

const CardBody = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 260px;
  height: 85px;
  margin-bottom: 15px;
  border-radius: 4px;
  padding-left: 14px;
  background-color: #4a0594;
  cursor: pointer;
  color: white;
  font-size: 20px;
  font-family: "Roboto", sans-serif;

  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export {
  CardBody
};
