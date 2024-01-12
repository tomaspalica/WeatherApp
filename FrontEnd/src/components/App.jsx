import { HomePage } from './HomePage';
import { RegisterPage } from './RegisterPage';
import { LoginPage } from './loginPage';
import { Route, Routes } from 'react-router-dom';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="*" element={<LoginPage />} /> */}
      </Routes>
    </div>
  );
};
