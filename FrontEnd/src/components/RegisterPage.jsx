import { Link } from 'react-router-dom';
export const RegisterPage = () => {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label for="email">Email</label>
        <input id="email" name="Email"></input>
        <label for="password">Password</label>
        <input id="password" name="Password"></input>
      </form>
      <p>
        You have an account already? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};
