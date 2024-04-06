import { useState } from 'react';
import styled from 'styled-components';
import All from '../../assets/icon/all.svg';
import AllSelected from '../../assets/icon/allSelected.svg';
import StudySelected from '../../assets/icon/studySelected.svg';
import Study from '../../assets/icon/study.svg';
import LibrarySelected from '../../assets/icon/librarySelected.svg';
import Library from '../../assets/icon/library.svg';
import TelevisionSelected from '../../assets/icon/televisionSelected.svg';
import Television from '../../assets/icon/television.svg';
import WebSelected from '../../assets/icon/webSelected.svg';
import Web from '../../assets/icon/web.svg';
import SnsSelected from '../../assets/icon/snsSelected.svg';
import Sns from '../../assets/icon/sns.svg';
import EtcSelected from '../../assets/icon/ectSelected.svg';
import Etc from '../../assets/icon/ect.svg';

const categoryData = [
  {
    id: 'all',
    value: '전체',
    select: <img src={AllSelected} />,
    not: <img src={All} />,
  },
  {
    id: 'study',
    value: '공부',
    select: <img src={StudySelected} />,
    not: <img src={Study} />,
  },
  {
    id: 'book',
    value: '독서',
    select: <img src={LibrarySelected} />,
    not: <img src={Library} />,
  },
  {
    id: 'watch',
    value: '시청',
    select: <img src={TelevisionSelected} />,
    not: <img src={Television} />,
  },
  {
    id: 'webtoon',
    value: '웹툰',
    select: <img src={WebSelected} />,
    not: <img src={Web} />,
  },
  {
    id: 'sns',
    value: 'SNS',
    select: <img src={SnsSelected} />,
    not: <img src={Sns} />,
  },
  {
    id: 'etc',
    value: '기타',
    select: <img src={EtcSelected} />,
    not: <img src={Etc} />,
  },
];

interface CategoryFilterProps {
  onFilterChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onFilterChange }) => {
  const [selected, setSelected] = useState('전체');

  const handleFilterChange = (id: string) => {
    setSelected(id);
    onFilterChange(id);
  };

  return (
    <FilterColumn>
      {categoryData.map((data) => (
        <Square
          $selected={data.value === selected}
          onClick={() => handleFilterChange(data.value)}
        >
          {selected === data.id ? data.select : data.not}
          {data.value}
        </Square>
      ))}
    </FilterColumn>
  );
};

export default CategoryFilter;

interface StyledProps {
  $selected: boolean;
}

const FilterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Square = styled.div<StyledProps>`
  display: flex;
  width: 96px;
  padding: 12px;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: ${({ $selected }) => ($selected ? '#FAFAFA' : '#FEFEFE')};
  color: ${({ $selected }) => ($selected ? '#2477FF' : '#9096A2')};
  border: 1px solid #e4e4e7;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 22.4px */
  letter-spacing: -0.32px;
`;
