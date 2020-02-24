import React from 'react';
import Item from '../Item';
import Title from '../Title';
import Input from '../Input';

type ListProps = {
  title: string;
  items: string[];
};

const List = ({items, title}: ListProps) => {
  return (
    <div>
      <Title value={title} />
      <Input />
      {items.map((item) => <Item key={item} title={item} />)}
    </div>
  );
};

export default List;
