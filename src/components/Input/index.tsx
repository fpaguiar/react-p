import React, {useState, useEffect} from 'react';
import {AddButton, TodoInput, InputWrapper, Wrapper} from './styles';
import {FiChevronRight, FiPlus} from 'react-icons/fi';

type InputProps = {
  onAdd: (t: string) => void;
}

const useTodo = (onAdd: (t: string) => void) => {
  const [isDisabled, setDisabled] = useState(true);
  const [todo, setTodo] = useState('');

  const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };
  const addNewTodo = () => {
    onAdd(todo);
    setTodo('');
  };

  useEffect(() => {
    if (!todo.length) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [todo]);

  return {
    addNewTodo,
    isDisabled,
    todo,
    updateValue,
  };
};

const Input = ({onAdd}: InputProps) => {
  const {addNewTodo, isDisabled, todo, updateValue} = useTodo(onAdd);

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
      <AddButton disabled={isDisabled} onClick={addNewTodo}>
        <FiPlus />
      </AddButton>
    </Wrapper>
  );
};

export default Input;
