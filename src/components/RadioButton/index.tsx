import { GlobalProps } from "../../types";
import * as S from "./styles";

export interface IRadioButton extends GlobalProps {
  listOptions: Array<string>;
  name: string;
}

export default function RadioButton(props: IRadioButton) {
  return (
    <S.RadioButton
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
      {props.className?.includes("options")
        ? props.listOptions &&
          props.name &&
          props.listOptions.map((option) => (
            <label key={option} htmlFor="">
              <div>
                <input type="radio" name={props.name} />
                <span>{option}</span>
              </div>
            </label>
          ))
        : props.listOptions &&
          props.name &&
          props.listOptions.map((option) => (
            <input key={option} type="radio" name={props.name} />
          ))}
    </S.RadioButton>
  );
}
