import styled from 'styled-components';
import msgImg from '../../assets/messageImg.png';

export const MessageBox = () => {
  return (
    <MessageBoxContainer>
      <Wrapper>
        <span>
          행복한 점심시간!
          <br />
          맛있게 밥 먹고 파이팅!
        </span>
      </Wrapper>
      <div className="text-box">
        <div className="text-top">
          <div className="text-detail">
            <span>회사</span>
            <span>|</span>
            <div>삼성전자</div>
          </div>
          <div className="text-detail">
            <span>이름</span>
            <span>|</span>
            <div>김대헌</div>
          </div>
        </div>
        <div className="date">
          대헌님이 출근한 지&nbsp;<span>120</span>일째
        </div>
      </div>
    </MessageBoxContainer>
  );
};

export const MessageBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  width: 500px;
  border: 1px solid #eee;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.07);
  border-radius: 20px;

  .text-box {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 20px;
    box-sizing: border-box;
    gap: 15px;
    justify-content: center;
    gap: 21px;

    .text-top {
      display: flex;
      justify-content: space-between;
      color: #74747e;
      .text-detail {
        display: flex;
        gap: 10px;

        div {
          font-weight: 700;
        }
      }
    }
  }

  .date {
    background-color: #ebf3ff;
    border-radius: 100px;
    padding: 20px;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    font-size: 20px;

    span {
      font-weight: 700;
    }
  }
`;

export const Wrapper = styled.div`
  background-image: url(${msgImg});
  background-size: cover;
  height: 523px;
  width: 321px;

  span {
    display: flex;
    justify-content: center;
    margin-top: 92px;
    font-size: 20px;
    color: #74747e;
    font-weight: 500;
  }
`;
