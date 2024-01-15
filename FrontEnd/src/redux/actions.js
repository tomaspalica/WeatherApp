export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};
export const toggleFavorite = weatherId => {
  return {
    type: 'cityWeather/toggleFavorite',
    payload: weatherId,
  };
};
