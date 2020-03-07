import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const InputWrapper = styled.div`
  align-items: center;
  background-color: var(--color-white);
  border-radius: 5px 0 0 5px;
  border: 1px solid #CCC;
  border-right: none;
  box-shadow: 1px 1px 2px var(--color-shadow);
  display: flex;
  height: 40px;
  width: 100%;
`;

export const TodoInput = styled.input`
  border: none;
  flex: 1;
  font-size: 18px;
  height: 100%;
`;

export const AddButton = styled.button`
  align-items: center;
  background-color: var(--color-white);
  display: flex;
  font-size: 14px;
  height: auto;
  font-weight: bold;
  font-size: 24px;
  border-radius: 0 5px 5px 0;
  box-shadow: 1px 1px 2px var(--color-shadow);
`;
