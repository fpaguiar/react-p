import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 10px 0;
  padding: 5px;
  &:hover {
    box-shadow: 0 1px 1px var(--color-shadow);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckBox = styled.input`
  margin-right: 10px;
`;

export const Text = styled.span`
  font-size: 14px;
`;
