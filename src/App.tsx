import React from 'react';
import './index.css';
import {observable, action} from 'mobx';
import {Wrapper} from './styles';
import List from './components/List';
import Input from './components/Input';

const App = () => {
  const items = observable(['My first todo', 'This is my second todo']);
  const addTodo = action((newTodo: string) => items.push(newTodo));

  return (
    <Wrapper>
      <Input onAdd={addTodo} />
      <List title="TODOS" items={items} />
    </Wrapper>
  );
};

export default App;
