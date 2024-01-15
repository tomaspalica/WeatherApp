import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/actions';

export const Weather = ({ cityWeather }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleFavorite(cityWeather.id));
  };

  return (
    <div>
      city:{cityWeather.city}, Tempreture:
      {cityWeather.temp}
      <button onClick={handleToggle}>
        {cityWeather.favorite === true ? <p>favorite</p> : <p> not favorite</p>}
      </button>
    </div>
  );
};
/* <input
type="checkbox"
onChange={handleToggle}
checked={cityWeather.favorite}
></input> */
