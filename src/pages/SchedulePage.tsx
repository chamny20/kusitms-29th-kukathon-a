import styled from 'styled-components';
import { Step } from '../components/step/Step';
import lineImg from '../assets/login/line.png';
import { EnterForm } from '../components/step/EnterForm';
import { useState } from 'react';
import { OutForm } from '../components/step/OutForm';
import { MiddleForm } from '../components/step/MiddleForm';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { nameState } from '../recoil/atoms';
import { postTimeTable } from '../api';

export const SchedulePage = () => {
  const [step, setStep] = useState<number>(0);

  const [selectedOutTime, setSelectedOutTime] = useState<string>('');
  const name = useRecoilValue(nameState);

  // const startWorkTime: string | null = localStorage.getItem('startWorkTime');
  // const startLunchTime = localStorage.getItem('startLunchTime');
  // const endLunchTime = localStorage.getItem('endLunchTime');
  // const endWorkTime = localStorage.getItem('endWorkTime');

  const handleOutTimeSelection = (time: string) => {
    setSelectedOutTime(time);
  };

  const navigate = useNavigate();

  // const signToken: string | null =
  //   (typeof window !== 'undefined' &&
  //     window.localStorage.getItem('signToken')) ||
  //   null;

  const startWorkTime: string | null = localStorage.getItem('startWorkTime');
  const startLunchTime: string | null = localStorage.getItem('startLunchTime');
  const endLunchTime: string | null = localStorage.getItem('endLunchTime');
  const endWorkTime: string | null = localStorage.getItem('endWorkTime');

  const handleClick = () => {
    navigate('/week-goal');
    postTimeTable({ startWorkTime, startLunchTime, endLunchTime, endWorkTime })
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SchedulePageWrapper>
      <ScheduleTitle>
        {name}님의 <span>하루 스케줄</span>을 알려주세요
      </ScheduleTitle>
      <Step step={step} setStep={setStep} />
      <FormWrapper>
        <img src={lineImg} alt="" />
        <div>
          {step === 0 && <EnterForm />}
          {step === 1 && <MiddleForm />}
          {step === 2 && (
            <OutForm
              selectedOutTime={selectedOutTime}
              onSelectOutTime={handleOutTimeSelection}
            />
          )}
        </div>
      </FormWrapper>
      {step === 2 && (
        <SubmitButton selectedOutTime={selectedOutTime} onClick={handleClick}>
          입력 완료
        </SubmitButton>
      )}
    </SchedulePageWrapper>
  );
};

export const ScheduleTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 64px;

  span {
    color: #2477ff;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  max-width: 503px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const SubmitButton = styled.button<{ selectedOutTime: string }>`
  background-color: ${({ selectedOutTime }) =>
    selectedOutTime ? '#0066FF' : '#f4f4f5'};
  color: ${({ selectedOutTime }) => (selectedOutTime ? 'white' : 'gray')};
  text-align: center;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  border: none;
  font-weight: 600;
  margin-top: 64px;
  font-size: 16px;
  height: 48px;
  width: 335px;
`;

export const SchedulePageWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 150px 0px;
`;
