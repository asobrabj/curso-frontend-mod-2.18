import { useState } from "react";
import { FormFields, GlobalProps } from "../../types";
import * as S from "./styles";

export interface ISelect extends GlobalProps, Omit<FormFields, "type"> {
  listOptions: Array<string>;
}

export default function Select(props: ISelect) {
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState(
    props.placeholder || "Escolha uma opção",
  );

  const changeVisible = () => {
    setVisible((v) => !v);
  };
  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setVisible(false);
  };
  return (
    <S.Select
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
      $visible={visible}
      $bdColor={props.bdColor}
    >
      <div className="custom-select">
        <div
          className={`custom-select-trigger primary ${props.className || ""}`}
          onClick={changeVisible}
        >
          {selectedValue}
        </div>
        <div className={`custom-options primary ${props.className}`}>
          {props.listOptions &&
            props.listOptions.map((option) => (
              <div
                key={option}
                className="custom-option"
                data-value={option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
        </div>
        <select id="real-select">
          {props.listOptions &&
            props.listOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
      </div>
    </S.Select>
  );
}
