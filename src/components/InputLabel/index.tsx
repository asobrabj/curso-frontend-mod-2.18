import { FormFields, GlobalProps } from "../../types";
import * as S from "./styles";

export interface IInputLabel extends GlobalProps, FormFields {
  label: string;
}

export default function InputLabel(props: IInputLabel) {
  return (
    <S.InputLabel
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
      $bdColor={props.bdColor}
    >
      <S.Label htmlFor={props.id}>
        {props.required && <span>*</span>}
        {props.label}
      </S.Label>
      <S.Input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        required
      />
    </S.InputLabel>
  );
}
