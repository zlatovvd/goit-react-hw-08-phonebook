import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import css from './Login.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthStatus } from 'redux/auth/authSelectors';
import { authLoginThunk } from 'redux/auth/authThunk';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const [values, setValues] = useState(initialState);
  const [isPassword, setIsPassword] = useState(true);
  const dispatch = useDispatch();
  const status = useSelector(selectAuthStatus);

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      dispatch(authLoginThunk(values));
    } catch (e) {
      console.log('error', e.message);
    }
  };

  const showPassword = () => {
    setIsPassword(!isPassword);
  };

  return (
    <form onSubmit={handleSubmit} className={css.loginForm}>
      <h1>Log In</h1>

      <FormControl mb={5} isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
      </FormControl>

      <FormControl mb={5} isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={isPassword ? 'password' : 'text'}
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <IconButton h="1.75rem" size="sm" onClick={showPassword}>
              {isPassword ? <ViewOffIcon /> : <ViewIcon />}
            </IconButton>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button colorScheme="teal" isLoading={status === 'loading'} type="sybmit">
        Log in
      </Button>
    </form>
  );
};

export default Login;
