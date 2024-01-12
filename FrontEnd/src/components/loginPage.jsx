import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label for="email">Email</label>
        <input id="email" name="Email"></input>
        <label for="password">password</label>
        <input id="password" name="Password"></input>
      </form>
      <p>
        You dont have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};
