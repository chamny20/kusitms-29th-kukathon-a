import styled from 'styled-components';
import { Card } from '../../components/common-components/Card/Card';
import tempImg from '../../assets/tempImg.png';
import { ListBox } from '../../components/result/ListBox';
import { GoalBox } from '../../components/result/GoalBox';
import { PositionBox } from '../../components/result/PositionBox';
import { TagBox } from '../../components/result/TagBox';
import { MessageBox } from '../../components/result/MessageBox';

export const ResultPage = () => {
  return (
    <ResultPageContainer>
      <FirstBox>
        <ResultTitle>
          2호선 출근러 대헌님의
          <br />
          <p>출근행을 응원해요!</p>
        </ResultTitle>
        <TempBox>
          <div>21도</div>
          <p>오늘의 신림동</p>
        </TempBox>
      </FirstBox>
      <div className="second-box">
        <GoalBox />
        <PositionBox />
      </div>

      <DivideWrapper>
        <div className="third-box">
          <Card title="땅에 버리는 출근시간 줍기" divider>
            <div className="list-wrapper">
              <ListBox />
              <ListBox />
              <ListBox />
            </div>
          </Card>

          <TagBox />
        </div>
        <MessageBox />
      </DivideWrapper>
    </ResultPageContainer>
  );
};

export const ResultPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f9ff;
  padding: 62px 67px;
  box-sizing: border-box;
  gap: 20px;
  max-width: 1060px;
  width: 100%;
  margin: 0 auto;

  .third-box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 584px;
  }

  .list-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .second-box {
    display: flex;
    gap: 22px;
    width: 100%;
    justify-content: space-between;
  }
`;

export const FirstBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ResultTitle = styled.div`
  font-size: 36px;
  font-weight: bold;

  p {
    padding-top: 10px;
    font-weight: 500;
  }
`;

export const TempBox = styled.div`
  background-image: url(${tempImg});
  background-size: cover;
  height: 131px;
  width: 248px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 30px;
  box-sizing: border-box;
  border: 1px solid #eee;
  border-radius: 20px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.07);

  div {
    color: #47474d;
    font-weight: 700;
    font-size: 28px;
  }

  p {
    color: #74747e;
    font-size: 16px;
  }
`;

export const DivideWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  /* max-width: 320px; */
`;
