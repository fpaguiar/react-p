import React from 'react';
import {TodoInput, Wrapper} from './styles';
import {FiChevronRight} from 'react-icons/fi';

const Input = () => {
  return (
    <Wrapper>
      <FiChevronRight />
      <TodoInput type="text" placeholder="What do you need to do?"/>
    </Wrapper>
  );
};

export default Input;
