import styled from 'styled-components';
import { ReactNode } from 'react';

interface Props {
  isLeftBtnShown: boolean;
  isRightBtnShown: boolean;
  viewPreviousInput?: () => void;
  viewNextInput?: () => void;
  isAllInputDone?: boolean;
  progress: ReactNode;
}

export const MoveInputContainer = ({
  isLeftBtnShown,
  isRightBtnShown,
  viewNextInput,
  viewPreviousInput,
  isAllInputDone,
  progress,
}: Props) => {
  return (
    <Style.Wrapper>
      <Style.ButtonWrapper>
        {isLeftBtnShown && (
          <Style.Button
            src={`${process.env.PUBLIC_URL}/arrow-left.svg`}
            onClick={viewPreviousInput}
            alt="이전 입력창"
          />
        )}
      </Style.ButtonWrapper>
      {progress}
      <Style.ButtonWrapper>
        {isRightBtnShown && (
          <Style.Button
            src={
              isAllInputDone
                ? `${process.env.PUBLIC_URL}/done.svg`
                : `${process.env.PUBLIC_URL}/arrow-right.svg`
            }
            onClick={viewNextInput}
            alt="이전 입력창"
          />
        )}
      </Style.ButtonWrapper>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    width: 318px;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 20px;
  `,
  ButtonWrapper: styled.div`
    width: 20px;
    height: 20px;
  `,
  Button: styled.img`
    width: 100%;
    height: 100%;

    cursor: pointer;
  `,
};
