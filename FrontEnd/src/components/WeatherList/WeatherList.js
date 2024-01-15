import { useSelector } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { Weather } from './Weather';
import { getCityWeather, getStatus } from '../../redux/selectors';
const getVisibleWeather = (citys, statusFilter) => {
  if (statusFilter === statusFilters.favorite) {
    return citys.filter(city => city.favorite);
  } else {
    return citys;
  }
};
export const WeatherList = () => {
  const citys = useSelector(getCityWeather);
  console.log(citys);
  const statusFilter = useSelector(getStatus);

  const visibleWeather = getVisibleWeather(citys, statusFilter);
  console.log(visibleWeather.map(el => el));
  return (
    <ul>
      {visibleWeather?.map(cityWeather => (
        <li key={cityWeather.id}>
          <Weather cityWeather={cityWeather} />
        </li>
      ))}
    </ul>
  );
};
