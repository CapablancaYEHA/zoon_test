import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  min-height: 100px;
  border-radius: 4px;
  padding: 28px 64px 72px 64px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    min-height: 236px;
    padding: 10px;
  }
`;

export {
Wrapper
};
