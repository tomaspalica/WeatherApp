import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/actions';
import { statusFilters } from '../../redux/constants';

export const WeatherFilters = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.status);
  console.log(filter);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <div>
      <button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </button>
      <button
        selected={filter === statusFilters.favorite}
        onClick={() => handleFilterChange(statusFilters.favorite)}
      >
        Favorite
      </button>
    </div>
  );
};
