import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test1" element={<MainPage />} />
        <Route path="/test2" element={<MainPage />} />
        <Route path="/test3" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
