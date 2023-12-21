import { styled } from "styled-components";

export const StyledForm = styled.form`
  margin-top: 10px;
  padding: 10px;
  padding-bottom: 0;
`;

export const Fieldset = styled.fieldset`
  padding: 20px 5%;
  border: 1px solid ${({ theme }) => theme.color.doveGrey};
  box-shadow: inset 1px 1px 8px ${({ theme }) => theme.color.silverChalice};
  border-radius: 10px;
  background: ${({ theme }) => theme.color.semiTransparentGrey};
`;

export const Legend = styled.legend`
  background-color: ${({ theme }) => theme.color.codGrey};
  font-size: 25px;
  font-weight: bold;
`;

export const Field = styled.input`
  padding: 2px 5px;
  cursor: pointer;
  width: 130px;
  background-color: ${({ theme }) => theme.color.tundora};
  color: ${({ theme }) => theme.color.white};
  text-align: right;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.white};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.white};
  }
`;

export const Option = styled.option`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.color.emperor};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  user-select: none;
  margin: 30px;
`;

export const Button = styled.button`
  background-color: #333;
  color: ${({ theme }) => theme.color.silver};
  box-shadow: inset 1px 1px 10px ${({ theme }) => theme.color.silver};
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  min-width: 130px;
  cursor: pointer;
  font-weight: bold;
  user-select: none;
  font-size: 20px;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.doveGrey};
    color: ${({ theme }) => theme.color.white};
    box-shadow: inset 1px 1px 10px ${({ theme }) => theme.color.white};
  }

  &:focus {
    border: none;
    outline: 1px solid ${({ theme }) => theme.color.white};
  }
`;

export const StyledInfo = styled.span`
  font-size: 0.9rem;
`;
