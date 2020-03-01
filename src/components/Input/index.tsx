import React, {useState} from 'react';
import {AddButton, TodoInput, Wrapper} from './styles';
import {FiChevronRight} from 'react-icons/fi';

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
      <FiChevronRight />
      <TodoInput
        onChange={updateValue}
        placeholder="What do you need to do?"
        type="text"
        value={todo}
      />
      <AddButton onClick={addNewTodo}>Add</AddButton>
    </Wrapper>
  );
};

export default Input;
