import styled from 'styled-components';
import Running from '../../assets/image/running.svg';
import Write from '../../assets/icon/write.svg';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import TitleIcon from '../../assets/icon/title.svg';

const FirstWorkGo = () => {
  const navigate = useNavigate();
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');

  const isClickEnabled = () => {
    return departure !== '' && arrival !== '';
  };
  return (
    <Container>
      <Content>
        <img src={TitleIcon} style={{ width: '100px' }} />
        <Center>
          <Going>
            <Title>
              {`대헌님의 `}
              <span style={{ color: '#2477FF' }}>출발지</span>와{` `}
              <span style={{ color: '#2477FF' }}>도착지</span>를 알려주세요
            </Title>
            <img src={Running} />
            <Place1>
              <PlaceDep
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                placeholder="출발지 입력        "
              ></PlaceDep>
              <Pen src={Write} />
            </Place1>
            <Place2>
              <PlaceArr
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                placeholder="도착지 입력        "
              ></PlaceArr>
              <Pen src={Write} />
            </Place2>
          </Going>
          <Button
            onClick={() => {
              navigate('/schedule');
            }}
            disabled={!isClickEnabled()}
          >
            입력완료
          </Button>
        </Center>
      </Content>
    </Container>
  );
};

export default FirstWorkGo;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background: var(--shadeogblue-shadeblue-10, #f5f9ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 1060px;
  height: 100%;
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--MainColors-White, #fefefe);
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 180px;
`;

const Title = styled.div`
  color: #171719;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 52px */
  letter-spacing: -1.128px;
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
  gap: 100px;
`;

const Place1 = styled.div`
  position: absolute;
  top: 115%;
  left: 35px;
`;

const Place2 = styled.div`
  position: absolute;
  top: 115%;
  left: 650px;
`;

const Pen = styled.img`
  position: absolute;
  top: 30%;
  left: 120px;
`;

const PlaceDep = styled.input`
  width: 105px;
  height: 20px;
  display: flex;
  padding: 9px 24px 9px 28px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.12px;
  border-radius: 500px;
  border: 1px solid var(--Greyscale-Grey-200, #e4e4e7);
`;

const PlaceArr = styled(PlaceDep)`
  left: 650px;
`;

const Button = styled.button`
  width: 335px;
  height: 48px;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  background: var(--MainColors-Blue90, #2477ff);
  color: var(--Main-Color-White, #fff);
  font-size: 16px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.16px;

  &:disabled {
    background: #f4f4f5;
    color: rgba(55, 56, 60, 0.28);
  }

  &:focus {
    outline: none;

    &::placeholder {
      color: rgba(128, 121, 121, 0.8);
      font-size: 10px;
    }
  }
`;
