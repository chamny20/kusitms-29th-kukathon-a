import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { TestPage } from '../pages/test/TestPage';
import { KakaoCallback } from '../components/login/KakaoCallback';
import WorkGo from '../pages/WorkGo';
import FirstWorkGo from '../pages/first/FirstWorkGo';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/first-workgo" element={<FirstWorkGo />} />
        <Route path="/workgo" element={<WorkGo />} />
        <Route path="/myworkroad" element={<MainPage />} />
        <Route path="/recentworkroad" element={<MainPage />} />
        <Route path="/login" element={<KakaoCallback />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
