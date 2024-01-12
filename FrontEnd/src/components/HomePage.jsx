import { Link } from 'react-router-dom';
export const HomePage = () => {
  return (
    <main>
      <h1>Welcome to WeatherApp</h1>
      <div>
        <Link to="/login">login</Link> or <Link to="/register">register</Link>{' '}
        to check weather all around the world
      </div>
    </main>
  );
};
