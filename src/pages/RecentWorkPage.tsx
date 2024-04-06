import styled from 'styled-components';
import Header from '../components/common/Header';
import Card from '../components/recent/Card';
import TimeFilter from '../components/recent/TimeFilter';

const RecentWorkPage = () => {
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
          <Vertical></Vertical>
          <Cards>
            <Card />
          </Cards>
        </Bottom>
      </Container>
    </div>
  );
};

export default RecentWorkPage;

const Container = styled.div`
  display: flex;
  width: 1060px;
  padding: 0px 200px;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
`;

const Top = styled.div`
  display: flex;
  width: 1060px;
  padding: 32px 26px 24px 26px;
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
  height: 674px;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  width: 794px;
  padding: 22px 49px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: #f4f4f7;
`;
