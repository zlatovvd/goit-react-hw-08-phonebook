import { fetchApi } from 'http/http';
import css from './Register.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authLoginThunk } from 'redux/auth/authThunk';
import {
  FormControl,
  FormLabel,
  Input,
  useToast,
  Button,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

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
  const toast = useToast();

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const showPassword = () => {
    setIsPassword(!isPassword);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setIsLoading(true);
      await fetchApi.post('/users/signup', values);
      await dispatch(
        authLoginThunk({ email: values.email, password: values.password })
      ).unwrap();
      setIsLoading(false);
      toast({
        title: `User ${values.name} registered`,
        position: 'top-right',
        isClosable: true,
        status: 'success',
      });
    } catch (e) {
      toast({
        title: `Error ${e.message}`,
        position: 'top-right',
        isClosable: true,
        status: 'error',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.registerForm}>
      <h1>Please Sign In</h1>

      <FormControl mb={5} isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          variant="outline"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mb={5} isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          variant="outline"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
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

      <Button colorScheme="teal" isLoading={isLoading} type="submit">
        Sign in
      </Button>
    </form>
  );
};

export default Register;
