import styled from "styled-components";

const StyledButton = styled.button`
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: rgba(255, 255, 255, 1);

  max-width: 459px;
  width: 100%;
  padding-top: 13px;
  padding-bottom: 13px;

  background-color: rgba(46, 210, 201, 1);
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(37, 173, 165, 1);
  }
  &:active {
    background-color: rgba(46, 210, 201, 1);
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
    &:hover {
      background-color: rgba(46, 210, 201, 1);
    }
  }
  @media (max-width: 1024px) {
    max-width: 331px;
  }
`;

export { StyledButton };
