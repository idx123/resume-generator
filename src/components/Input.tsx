import React from 'react';
import styled from 'styled-components';
import ErrorIcon from '@mui/icons-material/Error';

interface inputProps {
  label?: string;
  type: string;
  placeholder?: string;
  name: string;
  value?: string;
  defaultValue?: string;
  error?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Input = (props: inputProps) => {
  const {
    label,
    type,
    placeholder,
    name,
    value,
    defaultValue,
    error,
    onChange,
  } = props;

  return (
    <InputWrapper>
      <div className="flex-wrapper">
        {label && <StyledLabel htmlFor={label}>{label}</StyledLabel>}
        {error && (
          <ErrorMessage>
            <ErrorIcon />
            {error}
          </ErrorMessage>
        )}
      </div>
      <StyledInput
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        defaultValue={defaultValue}
        autoComplete="off"
        hasError={!!error}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  .flex-wrapper {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledLabel = styled.label`
  display: inline-block;
  margin: 0 0 0.4rem 0.4rem;
  font-size: 1.3rem;
  font-weight: 600;
`;
const StyledInput = styled.input<{ hasError: boolean }>`
  width: 100%;
  padding: 1.2rem 1rem;
  border-radius: 0.3rem;
  border: 1px solid
    ${({ hasError }) =>
      hasError ? 'var(--color-danger)' : 'var(--color-light-gray)'};
  background-color: ${({ hasError }) =>
    hasError ? 'var(--color-danger-bg)' : 'transparent'};

  &::placeholder {
    color: var(--color-bg);
  }
  &:focus {
    border: 1px solid
      ${({ hasError }) =>
        hasError ? 'var(--color-danger)' : 'var(--color-main)'};
  }
`;

const ErrorMessage = styled.span`
  position: relative;
  top: -0.3rem;
  margin: 0 0 0.4rem 0.4rem;
  color: var(--color-danger);
  font-size: 1.3rem;

  svg {
    position: relative;
    top: 0.2rem;
    margin-right: 0.3rem;
  }
`;

export default Input;
