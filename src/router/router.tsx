import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { TestPage } from '../pages/test/TestPage';
import { KakaoCallback } from '../components/login/KakaoCallback';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test1" element={<MainPage />} />
        <Route path="/test2" element={<MainPage />} />
        <Route path="/test3" element={<MainPage />} />
        <Route path="/login" element={<KakaoCallback />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;