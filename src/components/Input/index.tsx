import { FormFields, GlobalProps } from "../../types";
import * as S from "./styles";

export interface IInput extends GlobalProps, FormFields {}

export default function Input(props: IInput) {
  return (
    <S.Input
      className={props.className}
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
      $bdColor={props.bdColor}
      type={props.type}
      required={props.required}
    />
  );
}
