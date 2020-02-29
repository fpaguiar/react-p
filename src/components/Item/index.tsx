import React from 'react';
import {Wrapper, CheckBox, Content} from './styles';

type ItemProps = {
  title: string;
};

const Item = ({title}: ItemProps) => {
  return (
    <Wrapper>
      <Content>
        <CheckBox type="checkbox" />
        <span>{title}</span>
      </Content>
    </Wrapper>
  );
};

export default Item;
