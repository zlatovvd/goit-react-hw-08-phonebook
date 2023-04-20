import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuthStatus } from 'redux/auth/authSelectors';
import { authLoginThunk } from 'redux/auth/authThunk';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const status = useSelector(selectAuthStatus);
  const navigate = useNavigate();

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await dispatch(authLoginThunk(values)).unwrap();
      console.log('Ok');
      navigate('/contacts', { replace: true });
    } catch (e) {
      console.log('error', e.message);
    }
  };

  return (
    <>
      {status === 'loading' && <p>...Loading</p>}
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <label>
          Email address
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default Login;
