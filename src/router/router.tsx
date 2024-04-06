import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { TestPage } from '../pages/test/TestPage';
import { KakaoCallback } from '../components/login/KakaoCallback';
import WorkGo from '../pages/WorkGo';
import FirstWorkGo from '../pages/first/FirstWorkGo';
import RecentWorkPage from '../pages/RecentWorkPage';
import { LoginPage } from '../pages/login/LoginPage';
import { SchedulePage } from '../pages/SchedulePage';
import { ResultPage } from '../pages/main/ResultPage';
import { WeekGoalPage } from '../pages/WeekGoalPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/first-workgo" element={<FirstWorkGo />} />
        <Route path="/workgo" element={<WorkGo />} />
        <Route path="/myworkroad" element={<ResultPage />} />
        <Route path="/recentworkroad" element={<RecentWorkPage />} />
        <Route path="/login" element={<KakaoCallback />} />
        <Route path="/user-login" element={<LoginPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/week-goal" element={<WeekGoalPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
