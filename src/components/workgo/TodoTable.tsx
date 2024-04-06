import { useState } from 'react';
import Plus from '../../assets/icon/plus.svg';
import TodoList from './TodoList';
import styled from 'styled-components';

const TodoTable = () => {
  const [count, setCount] = useState(1);
  const [todo, setTodo] = useState([
    {
      category: '',
      todo: '',
    },
  ]);

  const handleAdd = () => {
    setTodo([...todo, { category: '', todo: '' }]);
    setCount(count + 1);
  };

  return (
    <Row>
      <List>
        {todo.map((item, index) => (
          <TodoList key={index} todo={item} />
        ))}
      </List>
      <img src={Plus} onClick={handleAdd} />
    </Row>
  );
};

export default TodoTable;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  margin-top: 15px;
`;
