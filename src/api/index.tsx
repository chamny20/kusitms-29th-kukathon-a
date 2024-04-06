import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://tioon.store',
});

type paramProps = {
  // param
};

// export const postArea = async ({ id, pw }: paramProps) => {
//   const res = await api.post("/api/v1/route", { id, pw });
//   return res;
// };

type timeProps = {
  startWorkTime: string | null;
  startLunchTime: string | null;
  endLunchTime: string | null;
  endWorkTime: string | null;
};

export const postTimeTable = async ({
  startWorkTime,
  startLunchTime,
  endLunchTime,
  endWorkTime,
}: timeProps) => {
  const res = await api.post('/api/v1/timetable/sign-up/time', {
    startWorkTime,
    startLunchTime,
    endLunchTime,
    endWorkTime,
  });
  return res;
};
