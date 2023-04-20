import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authLoginThunk } from 'redux/auth/authThunk';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isPassword, setIsPassword] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setIsLoading(true);
      await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        values
      );
      await dispatch(authLoginThunk(values)).unwrap();
      setIsLoading(false);
      navigate('/contacts', { replace: true });

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {isLoading && <p>...Loading</p>}
      <form onSubmit={handleSubmit}>
        <h1>Please Sign In</h1>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={values.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type={isPassword ? 'password' : 'text'}
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
          />
        </label>
        <button
          type="button"
          onClick={() => setIsPassword(prev => !prev)}
        >show password</button>
        <button type="submit">Sign in</button>
      </form>
    </>
  );
};

export default Register;
