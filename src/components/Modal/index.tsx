import { GlobalProps } from "../../types";
import * as S from "./styles";

export interface IModal extends GlobalProps {
  children: React.ReactNode;
}

export default function Modal(props: IModal) {
  return (
    <S.Container>
      <S.Modal
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
      >
        {props.children}
      </S.Modal>
    </S.Container>
  );
}
