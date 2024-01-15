import { HomePage } from './HomePage';
import { RegisterPage } from './RegisterPage';
import { WeatherPage } from '../Pages/WeatherPage';
import { LoginPage } from './loginPage';
import { Route, Routes } from 'react-router-dom';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        {/* <Route path="*" element={<LoginPage />} /> */}
      </Routes>
    </div>
  );
};
