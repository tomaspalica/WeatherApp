import { WeatherList } from '../components/WeatherList/WeatherList';
import { WeatherFilters } from '../components/weatherFilter/WeatherFilter.js';

export const WeatherPage = () => {
  return (
    <div>
      <WeatherFilters />
      <WeatherList />
    </div>
  );
};
