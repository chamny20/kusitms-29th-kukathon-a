import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { notify } from '../../hooks/notify';

type StepProp = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

export const Step = (props: StepProp) => {
  const { step, setStep } = props;

  const nextStep = () => {
    if (step >= 2) {
      notify({ text: '다음 단계가 없습니다.', icon: '🙀' });
    } else setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step <= 0) {
      notify({ text: '이전 단계가 없습니다.', icon: '🙀' });
    } else setStep((prev) => prev - 1);
  };

  return (
    <StepWrapper>
      <ArrowButton onClick={prevStep}>{`<`}</ArrowButton>
      {step === 0 && <div>출근 시간</div>}
      {step === 1 && <div>점심 시간</div>}
      {step === 2 && <div>퇴근 시간</div>}
      <ArrowButton onClick={nextStep}>{`>`}</ArrowButton>
    </StepWrapper>
  );
};

export const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 504px;
  justify-content: space-between;
  font-weight: bold;
`;
export const ArrowButton = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 12px;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
