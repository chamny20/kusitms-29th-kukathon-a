import styled from 'styled-components';
import { Card } from '../common-components/Card/Card';
import top1 from '../../assets/top1.png';
import top2 from '../../assets/top2.png';
import top3 from '../../assets/top3.png';

export const TagBox = () => {
  return (
    <TagBoxWrapper>
      <Card>
        <div className="wrapper">
          <div className="tag-wrapper">
            <div className="tag-title">
              이번 주 <br />
              내가 많이 태그한
            </div>
            <div className="tag-content">
              <div className="tag-item1">
                <div className="order">1위</div>
                <div>공부</div>
              </div>
              <div className="tag-item2">
                <div className="order">2위</div>
                <div>영상 시청</div>
              </div>
              <div className="tag-item3">
                <div className="order">3위</div>
                <div>독서</div>
              </div>
            </div>
          </div>
          <div className="tag-wrapper">
            <div className="tag-title">
              이번 주 <br />
              사람들이 실제 많이 태그한
            </div>
            <CircleBox>
              <div className="circle1">공부</div>
              <div className="circle2">휴식</div>
              <div className="circle3">공부</div>
            </CircleBox>
          </div>
        </div>
      </Card>
    </TagBoxWrapper>
  );
};

export const TagBoxWrapper = styled.div`
  display: flex;

  .wrapper {
    display: flex;
    gap: 20px;
  }

  .tag-wrapper {
    width: 50%;
    background-color: #f5f9ff;
    gap: 20px;
    border-radius: 20px;
    padding: 20px;

    .tag-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 258px;
      width: 100%;

      .tag-item1 {
        background-image: url(${top1});
        background-size: cover;
        width: 203px;
        display: flex;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
        justify-content: space-between;
        height: 82px;

        .order {
          color: white;
          font-weight: 600;
          font-size: 16px;
        }
      }
      .tag-item2 {
        background-image: url(${top2});
        background-size: cover;
        height: 55px;
        display: flex;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
        justify-content: space-between;

        .order {
          color: #eee;
          font-weight: 600;
          font-size: 16px;
        }
      }
      .tag-item3 {
        background-image: url(${top3});
        background-size: cover;
        height: 42px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        justify-content: space-between;

        .order {
          color: gray;
          font-weight: 600;
          margin-left: -5px;
          font-size: 16px;
        }
      }
    }

    .tag-title {
      font-size: 17px;
      font-weight: bold;
      color: #171719;
      margin-bottom: 20px;
    }
  }
`;

export const CircleBox = styled.div`
  position: relative;

  .circle1 {
    border-radius: 100%;
    background-color: #e0edff;
    width: 68px;
    height: 68px;
    color: #74747e;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 20px;
    left: 10px;
    font-weight: 600px;
  }

  .circle2 {
    border-radius: 100%;
    background-color: #3b64f6;
    width: 110px;
    height: 110px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 20px;
    right: 10px;
    font-weight: 600px;
  }

  .circle3 {
    border-radius: 100%;
    background-color: #b4c9ff;
    width: 92px;
    height: 92px;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 100px;
    left: 10px;
    font-weight: 600px;
  }
`;
