import React from 'react';
import {Wrapper, Content} from './styles';

type ItemProps = {
  title: string;
};

const Item = ({title}: ItemProps) => {
  return (
    <Wrapper>
      <Content>
        <input type="checkbox" />
        <span>{title}</span>
      </Content>
    </Wrapper>
  );
};

export default Item;
