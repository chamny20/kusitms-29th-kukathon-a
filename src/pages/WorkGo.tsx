import styled from 'styled-components';
import Running from '../assets/image/running.svg';
import Write from '../assets/icon/write.svg';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import TodoTable from '../components/workgo/TodoTable';
import { nameState } from '../recoil/atoms';
import { useRecoilValue } from 'recoil';

const WorkGo = () => {
  const navigate = useNavigate();
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const name = useRecoilValue(nameState);

  return (
    <Container>
      <Content>
        <div>
          <Title>
            {`2호선 출근러 ${name}님의\n`}
            <span style={{ fontWeight: 'bold' }}>2024년 4월 7일</span>의 출근행
          </Title>
          <Text>
            오늘은 화요일이에요! 남은 출근 단 3일 남았으니 파이팅하세요!
          </Text>
        </div>
        <Center>
          <Going>
            <img src={Running} />
            <Place1>
              <PlaceDep
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                placeholder="출발지   "
              ></PlaceDep>
              <Pen src={Write} />
            </Place1>
            <Place2>
              <PlaceArr
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                placeholder="도착지   "
              ></PlaceArr>
              <Pen src={Write} />
            </Place2>
          </Going>
          <Todo>
            <TodoTable />
          </Todo>
          <Button
            onClick={() => {
              navigate('/myworkroad');
            }}
          >
            출근하기
          </Button>
        </Center>
      </Content>
    </Container>
  );
};

export default WorkGo;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 120px;
  box-sizing: border-box;
  background: var(--shadeogblue-shadeblue-10, #f5f9ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  /* width: 843px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`;

const Title = styled.div`
  color: #000;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  letter-spacing: -1.92px;
  white-space: pre-wrap;
  margin-bottom: 12px;
`;

const Text = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Going = styled.div`
  width: 843px;
  height: 366px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
  position: relative;
`;

const Place1 = styled.div`
  position: absolute;
  top: 72%;
  left: 35px;
`;

const Place2 = styled.div`
  position: absolute;
  top: 72%;
  left: 650px;
`;

const Pen = styled.img`
  position: absolute;
  top: 30%;
  left: 120px;
`;

const PlaceDep = styled.input`
  width: 105px;
  height: 32px;
  display: flex;
  padding: 9px 24px 9px 28px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: #000;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.12px;
  border-radius: 500px;
  border: 1px solid var(--Greyscale-Grey-200, #e4e4e7);
  /* position: absolute;
  top: 72%;
  left: 35px; */
`;

const PlaceArr = styled(PlaceDep)`
  left: 650px;
`;
const Todo = styled.div``;

const Button = styled.div`
  width: 80px;
  text-align: center;
  padding: 16px 32px;
  border-radius: 100px;
  background: var(--MainColors-Blue90, #2477ff);
  color: var(--Main-Color-White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.16px;

  &:focus {
    outline: none;

    &::placeholder {
      color: rgba(128, 121, 121, 0.8);
      font-size: 10px;
    }
  }
`;
