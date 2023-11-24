import { GlobalProps } from "../../types";
import * as S from "./styles";

export interface ITextArea extends GlobalProps {
  resize?: "both" | "none" | "vertical" | "horizontal";
  placeholder?: string;
}

export default function TextArea(props: ITextArea) {
  return (
    <S.TextArea
      className={`primary ${props.className}`}
      $fs={props.fs}
      $fw={props.fw}
      $fStyle={props.fStyle}
      $fFamily={props.fFamily}
      $tAlign={props.tAlign}
      $tTransform={props.tTransform}
      $color={props.color}
      $bgColor={props.bgColor}
      $pd={props.pd}
      $pdTop={props.pdTop}
      $pdRigth={props.pdRigth}
      $pdLeft={props.pdLeft}
      $pdBottom={props.pdBottom}
      $mg={props.mg}
      $mgTop={props.mgTop}
      $mgRigth={props.mgRigth}
      $mgLeft={props.mgLeft}
      $mgBottom={props.mgBottom}
      $width={props.width}
      $height={props.height}
      placeholder={props.placeholder}
      $resize={props.resize}
      $bdColor={props.bdColor}
    />
  );
}
