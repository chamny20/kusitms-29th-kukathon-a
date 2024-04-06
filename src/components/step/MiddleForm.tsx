import styled from 'styled-components';
import lunchImg from '../../assets/login/lunch.png';
import { useState } from 'react';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

const ITEM_HEIGHT = 60;
const ITEM_PADDING_TOP = 15;

export const selectItems = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
];

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5.5 + ITEM_PADDING_TOP,
    },
  },
};

export const MiddleForm = () => {
  const [startLunch, setStartLunch] = useState<string>('');
  const [finishLunch, setFinishLunch] = useState<string>('');

  const handleStartChange = (event: SelectChangeEvent) => {
    setStartLunch(event.target.value as string);
    localStorage.setItem('startLunchTime', startLunch);
  };

  const handleFinishChange = (event: SelectChangeEvent) => {
    setFinishLunch(event.target.value as string);
    localStorage.setItem('endLunchTime', finishLunch);
  };

  return (
    <EnterFormWrapper>
      <div className="input-wrapper">
        <InputBox>
          <div>
            <p>START</p>
            <FieldWrapper>
              <Box sx={{ width: '100%' }}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={startLunch}
                    onChange={handleStartChange}
                    MenuProps={MenuProps}
                    displayEmpty
                    sx={{ fontFamily: 'Pretendard' }}
                  >
                    <MenuItem
                      disabled
                      value=""
                      sx={{ fontFamily: 'Pretendard' }}
                    >
                      START
                    </MenuItem>
                    {selectItems.map((item, idx) => {
                      return (
                        <MenuItem
                          value={item}
                          key={idx}
                          sx={{ fontFamily: 'Pretendard' }}
                          style={{ padding: '15px', boxSizing: 'border-box' }}
                        >
                          {item}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            </FieldWrapper>
          </div>
        </InputBox>
        <InputBox>
          <div>
            <p>FINISH</p>
            <FieldWrapper>
              <Box sx={{ width: '100%' }}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={finishLunch}
                    onChange={handleFinishChange}
                    MenuProps={MenuProps}
                    displayEmpty
                    sx={{ fontFamily: 'Pretendard' }}
                  >
                    <MenuItem
                      disabled
                      value=""
                      sx={{ fontFamily: 'Pretendard' }}
                    >
                      FINISH
                    </MenuItem>
                    {selectItems.map((item, idx) => {
                      return (
                        <MenuItem
                          value={item}
                          key={idx}
                          sx={{ fontFamily: 'Pretendard' }}
                          style={{ padding: '15px', boxSizing: 'border-box' }}
                        >
                          {item}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            </FieldWrapper>
          </div>
        </InputBox>
      </div>

      <img src={lunchImg} alt="" />
    </EnterFormWrapper>
  );
};

export const EnterFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  img {
    width: 240px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding-left: 24px;
  box-sizing: border-box;
  p {
    font-weight: 700;
    color: #9096a2;
  }
`;

export const FieldWrapper = styled.div`
  width: 196px;
  margin-top: 12px;
`;
