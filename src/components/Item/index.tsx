import React, {useState} from 'react';
import {Wrapper, CheckBox, Content, Text} from './styles';
import {FiGrid} from 'react-icons/fi';

type ItemProps = {
  title: string;
};

const Item = ({title}: ItemProps) => {
  const [isMouseHovering, setMouseHovering] = useState(false);
  return (
    <Wrapper
      onMouseEnter={() => setMouseHovering(true)}
      onMouseLeave={() => setMouseHovering(false)}
    >
      <Content>
        <CheckBox type="checkbox" />
        <Text>{title}</Text>
      </Content>
      {isMouseHovering && <FiGrid stroke="grey" />}
    </Wrapper>
  );
};

export default Item;
