import styled from 'styled-components';
import { Card } from '../common-components/Card/Card';
import positionImg from '../../assets/position.png';

export const PositionBox = () => {
  return (
    <PositionBoxContainer>
      <Card>
        <Wrapper>
          <img src={positionImg} alt="" />
          <div className="right-box">
            <div className="text-box">
              <div className="text">
                <span>합정</span>에서 <span>신림</span>까지
              </div>
            </div>
            <div className="time-box">
              <span>1</span>시간 <span>30</span>분
            </div>
          </div>
        </Wrapper>
      </Card>
    </PositionBoxContainer>
  );
};

export const PositionBoxContainer = styled.div`
  max-width: 320px;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;

  .right-box {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;

    .time-box {
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;

      span {
        font-size: 56px;
        color: #3b64f6;
        font-weight: 700;
      }
    }

    .text-box {
      display: flex;
      flex-direction: column;
      font-size: 16px;
      background-color: #ebf3ff;
      border-radius: 100px;
      padding: 8px 18px;
      box-sizing: border-box;
      .text {
        color: #74747e;
        span {
          font-weight: 600;
        }
      }
    }
  }
`;
