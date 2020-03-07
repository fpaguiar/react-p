import React, {useState} from 'react';
import {AddButton, TodoInput, InputWrapper, Wrapper} from './styles';
import {FiChevronRight, FiPlus} from 'react-icons/fi';

type InputProps = {
  onAdd: (t: string) => void;
}

const Input = ({onAdd}: InputProps) => {
  const [todo, setTodo] = useState('');
  const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };
  const addNewTodo = () => onAdd(todo);

  return (
    <Wrapper>
      <InputWrapper>
        <FiChevronRight />
        <TodoInput
          onChange={updateValue}
          placeholder="What do you need to do?"
          type="text"
          value={todo}
        />
      </InputWrapper>
      <AddButton onClick={addNewTodo}><FiPlus /></AddButton>
    </Wrapper>
  );
};

export default Input;
