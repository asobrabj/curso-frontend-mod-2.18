import styled from "styled-components";
import {
  IStyle,
  fontSize,
  fontWheigt,
  marginFn,
  paddingFn,
} from "../../types/styles";

interface ITextAreaStyle extends IStyle {
  $resize?: "both" | "none" | "vertical" | "horizontal";
}

export const TextArea = styled.textarea<ITextAreaStyle>`
  font-size: ${(props) => (props.$fs ? fontSize(props.$fs) : "")};
  font-style: ${(props) => props.$fStyle || ""};
  font-weight: ${(props) => (props.$fw ? fontWheigt(props.$fw) : "")};
  font-family: ${(props) => props.$fFamily || ""};
  text-align: ${(props) => props.$tAlign || ""};
  text-transform: ${(props) => props.$tTransform || ""};
  color: ${(props) => props.$color || ""};
  background-color: ${(props) => props.$bgColor || ""};
  padding: ${(props) => (props.$pd ? paddingFn(props.$pd) : "")};
  padding-top: ${(props) => (props.$pdTop ? props.$pdTop + "px" : "")};
  padding-left: ${(props) => (props.$pdLeft ? props.$pdLeft + "px" : "")};
  padding-right: ${(props) => (props.$pdRigth ? props.$pdRigth + "px" : "")};
  padding-bottom: ${(props) => (props.$pdBottom ? props.$pdBottom + "px" : "")};
  margin: ${(props) => (props.$mg ? marginFn(props.$mg) : "")};
  margin-top: ${(props) => (props.$mgTop ? props.$mgTop + "px" : "")};
  margin-left: ${(props) => (props.$mgLeft ? props.$mgLeft + "px" : "")};
  margin-right: ${(props) => (props.$mgRigth ? props.$mgRigth + "px" : "")};
  margin-bottom: ${(props) => (props.$mgBottom ? props.$mgBottom + "px" : "")};
  width: ${(props) => (props.$width ? props.$width + "px" : "")};
  height: ${(props) => (props.$height ? props.$height + "px" : "")};
  min-height: ${(props) => (props.$height ? props.$height + "px" : "150px")};
  resize: ${(props) => props.$resize};
  border-color: ${(props) => props.$bdColor || ""};

  &.primary {
    width: ${(props) => (props.$width ? props.$width + "px" : "200px")};
    padding: ${(props) => (props.$pd ? paddingFn(props.$pd) : "8px")};
    border: 1px solid #00abff;
    border-color: ${(props) => props.$bdColor || ""};
    margin: 1px;
    border-radius: 8px;
  }

  &.secondary {
    width: ${(props) => (props.$width ? props.$width + "px" : "200px")};
    padding: ${(props) => (props.$pd ? paddingFn(props.$pd) : "8px")};
    border: 1px solid #00abff;
    margin: 1px;
    border-radius: 8px 0;
    border-color: ${(props) => props.$bdColor || ""};
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
