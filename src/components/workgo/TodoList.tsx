import styled from 'styled-components';
import { useState } from 'react';
import Input from '../common/Input';
import DropBox from '../common/DropBox';

interface Todo {
  category: string;
  todo: string;
}

const TodoList = ({ todo }: { todo: Todo }) => {
  const [category, setCategory] = useState(todo.category);
  const [input, setInput] = useState(todo.todo);

  return (
    <List>
      <DropBox
        value={category}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setCategory(e.target.value)
        }
      />
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        width="502px"
        placeholder="오늘 출근시간에는 무엇을 하셨나요?"
      />
    </List>
  );
};

export default TodoList;

const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 22px;
`;
