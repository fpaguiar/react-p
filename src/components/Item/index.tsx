import React from 'react';
import {Wrapper, CheckBox, Content, Text} from './styles';

type ItemProps = {
  title: string;
};

const Item = ({title}: ItemProps) => {
  return (
    <Wrapper>
      <Content>
        <CheckBox type="checkbox" />
        <Text>{title}</Text>
      </Content>
    </Wrapper>
  );
};

export default Item;
