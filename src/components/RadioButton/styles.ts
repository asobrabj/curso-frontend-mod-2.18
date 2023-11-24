import styled from "styled-components";
import {
  IStyle,
  fontSize,
  fontWheigt,
  marginFn,
  paddingFn,
} from "../../types/styles";

interface IRadioButtonStyle extends IStyle {}

export const RadioButton = styled.div<IRadioButtonStyle>`
  font-size: ${(props) => (props.$fs ? fontSize(props.$fs) : "")};
  font-style: ${(props) => props.$fStyle || ""};
  font-weight: ${(props) => (props.$fw ? fontWheigt(props.$fw) : "")};
  font-family: ${(props) => props.$fFamily || ""};
  text-align: ${(props) => props.$tAlign || ""};
  text-transform: ${(props) => props.$tTransform || ""};
  color: ${(props) => props.$color || ""};
  background-color: ${(props) => props.$bgColor || ""};
  padding: ${(props) => (props.$pd ? paddingFn(props.$pd) : "8px")};
  padding-top: ${(props) => (props.$pdTop ? props.$pdTop + "px" : "")};
  padding-left: ${(props) => (props.$pdLeft ? props.$pdLeft + "px" : "")};
  padding-right: ${(props) => (props.$pdRigth ? props.$pdRigth + "px" : "")};
  padding-bottom: ${(props) => (props.$pdBottom ? props.$pdBottom + "px" : "")};
  margin: ${(props) => (props.$mg ? marginFn(props.$mg) : "0")};
  margin-top: ${(props) => (props.$mgTop ? props.$mgTop + "px" : "")};
  margin-left: ${(props) => (props.$mgLeft ? props.$mgLeft + "px" : "")};
  margin-right: ${(props) => (props.$mgRigth ? props.$mgRigth + "px" : "")};
  margin-bottom: ${(props) => (props.$mgBottom ? props.$mgBottom + "px" : "")};
  max-width: ${(props) => (props.$width ? props.$width + "px" : "200px")};
  height: ${(props) => (props.$height ? props.$height + "px" : "")};
  border-color: ${(props) => props.$bdColor || ""};
  border: 1px solid #00abff;

  > input {
    margin: 0;
    padding: 0;
  }

  &.scale {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  &.options {
    > label {
      display: block;
      margin: 8px 0;
      > div {
        display: flex;
        align-items: center;
        > input {
          margin: 0 5px;
        }
      }
    }
  }

  &.primary {
    margin: 1px;
    border-radius: 8px;
  }

  &.secondary {
    margin: 1px;
    border-radius: 8px 0;
  }

  &.error {
    border: 1px solid #ff0000;
    color: ${(props) => props.$color || "#ff0000"};
    &:focus {
      border: 2px solid #ff0000;
    }
  }

  &.rounded {
    border-radius: 8px;
  }

  &:focus {
    outline: none;
    border: 2px solid #00abff;
    margin: 0;
  }
`;
