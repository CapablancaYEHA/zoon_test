import styled from "styled-components";



const CardBody = styled.div<{bgIcon: string}>`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  width: 260px;
  height: 85px;
  padding-top: 16px;
  margin-bottom: 15px;
  border-radius: 4px;
  padding-left: 24px;
  background-color: #4a0594;
  cursor: pointer;
  color: #ffffff;
  font-size: 20px;
  font-family: "Roboto", sans-serif;


  &:not(:last-child) {
    margin-right: 5px;
  }

  &:after {
    display: block;
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    background-image: url(${props => props.bgIcon});
    background-repeat: no-repeat;
    background-size: 100%;
    top: 20px;
    right: 14px;
  }
`;

const CardInfo = styled.div`
  width: auto;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 3px;
`;

const CardCaption = styled.div`
  width: auto;
  font-size: 13px;
`;

export {
  CardBody,
  CardInfo,
  CardCaption
};
