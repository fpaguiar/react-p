import React from 'react';
import {useObserver} from 'mobx-react';
import Item from '../Item';
import Title from '../Title';

type ListProps = {
  title: string;
  items: string[];
};

const List = (({items, title}: ListProps) => {
  return useObserver(() => (
    <div>
      <Title value={title} />
      {items.map((item) => <Item key={item} title={item} />)}
    </div>
  ));
});

export default List;
