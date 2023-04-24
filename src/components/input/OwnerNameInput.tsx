import { forwardRef, useEffect } from 'react';
import { InputWrapper } from './template/InputWrapper';
import { Input } from './template/Input';
import styled from 'styled-components';

interface Props {
  ownerName: string;
  setOwnerName: React.Dispatch<React.SetStateAction<string>>;
  focusFirstOwnerNameInput: () => void;
}

export const OwnerNameInput = forwardRef<HTMLInputElement[], Props>(
  function OwnerNameInput(
    { ownerName, setOwnerName, focusFirstOwnerNameInput },
    refs
  ) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isValidName(e.target.value)) {
        alert('유효한 이름이 아닙니다.');

        e.target.value = '';
      }

      setOwnerName(e.target.value.toUpperCase());
    };

    useEffect(() => {
      focusFirstOwnerNameInput();
    }, []);

    return (
      <>
        <Style.Label>
          <Style.Title>카드 소유자 이름(선택)</Style.Title>
          <Style.NameLength>{ownerName.length}/30</Style.NameLength>
        </Style.Label>
        <InputWrapper width={318}>
          <Input
            ref={(element) => {
              if (!(element instanceof HTMLInputElement)) return;
              if (typeof refs !== 'object') return;
              if (refs?.current) refs.current[0] = element;
            }}
            value={ownerName}
            width={'318'}
            minLength={1}
            maxLength={30}
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            onChange={handleInputChange}
          />
        </InputWrapper>
      </>
    );
  }
);

const isValidName = (input: string) => {
  return input.length <= 30 && /^[a-zA-Z]+$/.test(input);
};

const Style = {
  Label: styled.div`
    width: 318px;

    display: flex;
    justify-content: space-between;

    font-size: 12px;
  `,
  NameLength: styled.span`
    color: #2f2f2f;
  `,
  Title: styled.span`
    color: #2f2f2f;
  `,
};
