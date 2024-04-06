import styled from 'styled-components';
import Header from '../components/common/Header';
import Card from '../components/recent/Card';
import TimeFilter from '../components/recent/TimeFilter';
import CategoryFilter from '../components/recent/CategoryFilter';
import { useState } from 'react';

const cardData = [
  {
    id: '0',
    tag: '공부',
    region: '강남',
    todo: '주식공부',
    date: '24.04.07',
  },
  {
    id: '1',
    tag: '독서',
    region: '판교',
    todo: '트렌트 코리아 2024',
    date: '24.04.07',
  },
  {
    id: '2',
    tag: '독서',
    region: '건대',
    todo: 'React 개발 서적',
    date: '24.04.07',
  },
  {
    id: '3',
    tag: '독서',
    region: '종로',
    todo: '동물농장',
    date: '24.04.05',
  },
  {
    id: '4',
    tag: '시청',
    region: '성수',
    todo: '기생충 영화시청',
    date: '24.04.05',
  },
  {
    id: '5',
    tag: 'SNS',
    region: '마곡',
    todo: '유튜브 시청',
    date: '24.04.04',
  },
  {
    id: '6',
    tag: '공부',
    region: '이태원',
    todo: 'Figma 강의 듣기(2)',
    date: '24.04.03',
  },
  {
    id: '7',
    tag: '독서',
    region: '강남',
    todo: '주식공부',
    date: '24.04.03',
  },
  {
    id: '8',
    tag: '공부',
    region: '이태원',
    todo: 'Figma 강의 듣기(1)',
    date: '24.04.03',
  },
  {
    id: '9',
    tag: '시청',
    region: '건대',
    todo: '인스타 숏츠 시청',
    date: '24.04.01',
  },
];

const RecentWorkPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryFilterChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Header />
      <Container>
        <Top>
          <Title>요즘 출근길</Title>
          <Filters>
            <TimeFilter />
          </Filters>
        </Top>
        <Bottom>
          <Vertical>
            <CategoryFilter onFilterChange={handleCategoryFilterChange} />
          </Vertical>
          <Cards>
            {selectedCategory === '전체'
              ? cardData.map((data) => <Card key={data.id} data={data} />)
              : cardData
                  .filter((data) => data.tag === selectedCategory)
                  .map((data) => <Card key={data.id} data={data} />)}
          </Cards>
        </Bottom>
      </Container>
    </div>
  );
};

export default RecentWorkPage;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 200px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  padding: 32px 26px 10px 26px;
  margin-left: 60px;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
`;

const Title = styled.div`
  color: var(--Semantic-Label-Normal, var(--Label-Normal, #171719));
  font-feature-settings: 'ss10' on;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 133.4%; /* 48.024px */
  letter-spacing: -0.972px;
`;

const Filters = styled.div``;

const Bottom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Vertical = styled.div`
  display: inline-flex;
  height: 674px;
  padding: 22px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const Cards = styled.div`
  /* width: 100%; */
  max-width: 1000px;
  padding: 22px 49px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background: #f4f4f7;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
