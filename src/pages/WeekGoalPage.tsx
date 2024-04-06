import styled from 'styled-components';
import logo from '../assets/icon/title.svg';
import { GoalForm } from '../components/goal/GoalForm';

export const WeekGoalPage = () => {
  return (
    <WeekGoalPageContainer>
      <Container>
        <div className="top-box">
          <img src={logo} alt="" />
          <div className="title-box">
            2호선 출근러 대헌님의
            <br />
            <span>2024년 4월 7일부터 4월 13일까지</span>의 목표
          </div>
        </div>
        <GoalForm />
      </Container>
    </WeekGoalPageContainer>
  );
};

export const WeekGoalPageContainer = styled.div`
  background-color: #e0edff;
  /* height: 100vh; */
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1060px;
  width: 100%;
  padding: 50px 0px;
  margin: 0 auto;
  box-sizing: border-box;

  .top-box {
    display: flex;
    flex-direction: column;

    .title-box {
      margin-top: 50px;
      justify-content: center;
      gap: 10px;
      /* display: flex; */
      /* flex-direction:column; */

      font-size: 36px;
      font-weight: 700;

      span {
        color: #2477ff;
      }
    }

    img {
      width: 100px;
    }
  }
`;
