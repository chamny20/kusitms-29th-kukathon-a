import styled from 'styled-components';
import outImg from '../../assets/login/out.png';
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

interface OutFormProps {
  selectedOutTime: string;
  onSelectOutTime: (time: string) => void;
}

export const OutForm = ({ selectedOutTime, onSelectOutTime }: OutFormProps) => {
  // const [item, setItem] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    const selectedTime = event.target.value as string;
    onSelectOutTime(selectedTime); // 선택된 퇴근시간을 부모 컴포넌트로 전달
    localStorage.setItem('endWorkTime', selectedOutTime);
  };

  return (
    <EnterFormWrapper>
      <InputBox>
        <div>
          <p>FINISH</p>
          <FieldWrapper>
            <Box sx={{ width: '100%' }}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedOutTime}
                  onChange={handleChange}
                  MenuProps={MenuProps}
                  displayEmpty
                  sx={{ fontFamily: 'Pretendard' }}
                >
                  <MenuItem disabled value="" sx={{ fontFamily: 'Pretendard' }}>
                    퇴근시간을 선택하세요.
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
      <img src={outImg} alt="" />
    </EnterFormWrapper>
  );
};

export const EnterFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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
