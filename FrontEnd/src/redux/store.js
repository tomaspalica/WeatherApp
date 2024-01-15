import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';

const initialState = {
  cityWeather: [
    { id: 1, city: 'puławy', temp: '20c', favorite: true },
    { id: 2, city: 'Lublin', temp: '15c', favorite: false },
    { id: 3, city: 'Warszawa', temp: '17c', favorite: false },
    { id: 4, city: 'Kraków', temp: '18c', favorite: false },
    { id: 5, city: 'Wrocław', temp: '21c', favorite: false },
  ],
  filters: {
    status: 'all',
  },
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };

    case 'cityWeather/toggleFavorite':
      return {
        ...state,
        cityWeather: state.cityWeather.map(el => {
          console.log(el.id);
          if (el.id === action.payload) {
            return {
              ...el,
              favorite: !el.favorite,
            };
          } else {
            return { ...el };
          }
        }),
      };
    default:
      return state;
  }
};
const enchancer = devToolsEnhancer();
export const store = createStore(rootReducer, enchancer);
