import { useState } from 'react';
import styled from 'styled-components';

interface DropBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const PRODUCT_DATA = [
  { id: null, value: '선택' },
  { id: '1', value: '영상보기' },
  { id: '2', value: '독서' },
  { id: '3', value: 'OTT' },
  { id: '4', value: '휴식' },
];

const DropBox: React.FC<DropBoxProps> = () => {
  const [selectedDropValue, setSelectedDropValue] = useState('선택');
  const handleDropItem = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDropValue(e.target.value);
  };

  return (
    <ProductBar>
      <ProductSearch value={selectedDropValue} onChange={handleDropItem}>
        {PRODUCT_DATA.map((option) => {
          return <option key={option.id}>{option.value}</option>;
        })}
      </ProductSearch>
    </ProductBar>
  );
};

export default DropBox;

const ProductBar = styled.div``;
const ProductSearch = styled.select`
  width: 177px;
  height: 53px;
  text-align: center;
  border: none;
  border-radius: 18px;
  background: var(--shadeogblue-shadeblue-40, #e0edff);
  color: rgba(128, 121, 121, 0.8);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;

  &:focus {
    outline: none;
  }
`;
