import styled from "styled-components";
import {
  IStyle,
  fontSize,
  fontWheigt,
  marginFn,
  paddingFn,
} from "../../types/styles";

interface IModalStyle extends IStyle {}

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const Modal = styled.div<IModalStyle>`
  font-size: ${(props) => (props.$fs ? fontSize(props.$fs) : "")};
  font-style: ${(props) => props.$fStyle || ""};
  font-weight: ${(props) => (props.$fw ? fontWheigt(props.$fw) : "")};
  font-family: ${(props) => props.$fFamily || ""};
  text-align: ${(props) => props.$tAlign || ""};
  text-transform: ${(props) => props.$tTransform || ""};
  color: ${(props) => props.$color || ""};
  background-color: ${(props) => props.$bgColor || ""};
  padding: ${(props) => (props.$pd ? paddingFn(props.$pd) : "16px")};
  padding-top: ${(props) => (props.$pdTop ? props.$pdTop + "px" : "")};
  padding-left: ${(props) => (props.$pdLeft ? props.$pdLeft + "px" : "")};
  padding-right: ${(props) => (props.$pdRigth ? props.$pdRigth + "px" : "")};
  padding-bottom: ${(props) => (props.$pdBottom ? props.$pdBottom + "px" : "")};
  margin: ${(props) => (props.$mg ? marginFn(props.$mg) : "")};
  margin-top: ${(props) => (props.$mgTop ? props.$mgTop + "px" : "")};
  margin-left: ${(props) => (props.$mgLeft ? props.$mgLeft + "px" : "")};
  margin-right: ${(props) => (props.$mgRigth ? props.$mgRigth + "px" : "")};
  margin-bottom: ${(props) => (props.$mgBottom ? props.$mgBottom + "px" : "")};
  border: 1px solid rgba(0, 0, 0, 0.3);
  max-width: ${(props) => (props.$width ? props.$width + "px" : "500px")};
  border-radius: 16px;
`;
