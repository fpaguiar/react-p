import React from 'react';
import {Wrapper} from './styles';
import {FiChevronRight} from 'react-icons/fi';

const Input = () => {
  return (
    <Wrapper>
      <FiChevronRight />
      <input type="text" placeholder="What do you need to do?"/>
    </Wrapper>
  );
};

export default Input;
