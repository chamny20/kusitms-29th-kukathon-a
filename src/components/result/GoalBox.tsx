import styled from 'styled-components';
import { Card } from '../common-components/Card/Card';

export const GoalBox = () => {
  return (
    <GoalBoxContainer>
      <Card>
        <div className="item-box">
          <div className="item-detail">
            <div className="title">이번 주 출근의 목표</div>
            <div className="goal-list">
              <li>중급한자어 열심히 읽기</li>
              <li>중급한자어 열심히 읽기</li>
            </div>
          </div>

          <div className="item-detail">
            <div className="title">이번 주 남은 출퇴근 시간</div>
            <div className="time-box">
              <span>13</span>시간
            </div>
          </div>
        </div>
      </Card>
    </GoalBoxContainer>
  );
};

export const GoalBoxContainer = styled.div`
  display: flex;
  width: 100%;

  .item-box {
    display: flex;
    justify-content: space-between;

    .item-detail {
      display: flex;
      flex-direction: column;
      gap: 30px;
      justify-content: center;

      .goal-list {
        display: flex;
        margin-top: 10px;
        flex-direction: column;
        gap: 10px;
      }

      .time-box {
        display: flex;
        gap: 10px;
        align-items: center;

        span {
          font-size: 56px;
          color: #3b64f6;
          font-weight: 700;
        }
      }

      .title {
        color: #74747e;
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
`;
