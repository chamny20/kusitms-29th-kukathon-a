import styled from 'styled-components';
import { SubmitButton } from '../../pages/SchedulePage';
import { useState } from 'react';

export const GoalForm = () => {
  const [firstInput, setFirstInput] = useState<string>('');
  const [secondInput, setSecondInput] = useState<string>('');

  const handleInput1 = (e: any) => {
    setFirstInput(e.target.value);
  };

  const handleInput2 = (e: any) => {
    setSecondInput(e.target.value);
  };

  return (
    <GoalFormWrapper>
      <div className="title">이번 주 목표를 입력해볼까요?</div>
      <InputBox>
        <div className="input-wrapper">
          <p>첫 번째 목표</p>
          <StyledInput
            value={firstInput}
            onChange={handleInput1}
            placeholder="50자 이내로 입력해주세요."
          />
        </div>
        <div className="input-wrapper">
          <p>두 번째 목표</p>
          <StyledInput
            value={secondInput}
            onChange={handleInput2}
            placeholder="50자 이내로 입력해주세요."
          />
        </div>
      </InputBox>
      <div className="center-box">
        <SubmitButton selectedOutTime={secondInput}>입력 완료</SubmitButton>
      </div>
    </GoalFormWrapper>
  );
};

export const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid #cacace;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;

  ::placeholder {
    color: #cacace;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  box-sizing: border-box;
  justify-content: center;

  p {
    font-weight: 700;
    color: #9096a2;
  }

  .input-wrapper {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
`;

export const GoalFormWrapper = styled.div`
  border: 1px solid #eee;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(173, 99, 99, 0.07);
  padding: 80px;
  box-sizing: borer-box;
  /* height: 571px; */
  border-radius: 20px;
  margin: 50px 0px;
  /* align-items: center; */
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 40px;

  .center-box {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    font-size: 32px;
    font-weight: 700;
  }
`;
