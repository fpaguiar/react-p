import React, {useState, useEffect} from 'react';
import {AddButton, TodoInput, InputWrapper, Wrapper} from './styles';
import {FiChevronRight, FiPlus} from 'react-icons/fi';

type InputProps = {
  onAdd: (t: string) => void;
}

const useTodo = (onAdd: (t: string) => void) => {
  const [isEnabled, setEnabled] = useState(false);
  const [todo, setTodo] = useState('');

  const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };
  const addNewTodo = () => {
    if (isEnabled) {
      onAdd(todo);
      setTodo('');
    }
  };

  useEffect(() => {
    if (!todo.length) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [todo]);

  return {
    addNewTodo,
    todo,
    updateValue,
  };
};

const Input = ({onAdd}: InputProps) => {
  const {addNewTodo, todo, updateValue} = useTodo(onAdd);

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
