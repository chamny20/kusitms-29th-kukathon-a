import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  width,
  placeholder,
}) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      $width={width}
      placeholder={placeholder}
    />
  );
};

export default Input;

interface StyledInputProps {
  $width?: string;
}

const StyledInput = styled.input<StyledInputProps>`
  width: ${({ $width }) => ($width ? $width : '100%')};
  height: 53px;
  padding: 10px 30px;
  box-sizing: border-box;
  border-radius: 18px;
  border: none;
  background: var(--shadeogblue-shadeblue-40, #e0edff);
  font-size: 18px;

  &:focus {
    outline: none;

    &::placeholder {
      color: rgba(128, 121, 121, 0.8);
    }
  }
`;
