import { useState } from 'react';
import styled from 'styled-components';

const timeData = [
  { id: 'all', value: '전체보기' },
  { id: '1', value: '30분 이하' },
  { id: '2', value: '1시간 이하' },
  { id: '3', value: '2시간 이하' },
  { id: '4', value: '2시간 이상' },
];

const TimeFilter = () => {
  const [selected, setSelected] = useState('all');

  return (
    <FilterRow>
      {timeData.map((data) => (
        <Round
          $selected={data.id === selected}
          onClick={() => setSelected(data.id)}
        >
          {data.value}
        </Round>
      ))}
    </FilterRow>
  );
};

export default TimeFilter;

interface StyledProps {
  $selected: boolean;
}

const FilterRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Round = styled.div<StyledProps>`
  display: flex;
  padding: 4px 12px;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  background: #fefefe;
  color: ${({ $selected }) => ($selected ? '#3B64F6' : '#171719')};
  border: 1px solid ${({ $selected }) => ($selected ? '#3B64F6' : '#171719')};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 22.4px */
`;
