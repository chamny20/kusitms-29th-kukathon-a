import styled from 'styled-components';
import ThumbsUp from '../../assets/icon/thumbsUp.svg';

interface Todo {
  tag: string;
  region: string;
  todo: string;
  date: string;
}

const Card = ({ data }: { data: Todo }) => {
  return (
    <Container>
      <Top>
        <Tag>{data.tag}</Tag>
        <Region>{data.region}</Region>
      </Top>
      <Gap>
        <Title>{data.todo}</Title>
        <Row>
          <Date>{data.date}</Date>
          <Date>
            <img src={ThumbsUp} /> 13
          </Date>
        </Row>
      </Gap>
      <Button>격려하기</Button>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  display: flex;
  width: 338px;
  height: 186px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  border-radius: 10px;
  padding: 24px;
  border: 1px solid var(--, #e0e0e0);
  background: #fff;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Tag = styled.div`
  display: flex;
  padding: 0px 14px;
  align-items: center;
  gap: 1px;
  border-radius: 31px;
  background: #ebf3ff;
  color: #3b64f6;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 23.94px; /* 171% */
`;

const Region = styled.div`
  color: #888893;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;

const Gap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Title = styled.div`
  color: var(--, #0f0f10);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
`;

const Row = styled(Gap)`
  flex-direction: row;
  gap: 15px;
`;
const Date = styled.div`
  color: #888893;
  text-align: left;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;

const Button = styled.div`
  width: 290px;
  height: 18px;
  padding: 16px 22px;
  justify-content: center;
  display: inline-flex;
  align-items: center;
  border-radius: 10px;
  background: var(--MainColors-Blue100, #3b64f6);
  color: white;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 18.2px; /* 121.333% */
`;
