import React from 'react';
import './index.css';
import {Wrapper} from './styles';
import List from './components/List';

const App = () => {
  const items = ['Create Item Actions', 'Create Todo Options'];

  return (
    <Wrapper>
      <List title="TODOS" items={items} />
    </Wrapper>
  );
};

export default App;
