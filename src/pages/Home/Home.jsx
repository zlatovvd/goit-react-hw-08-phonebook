import { selectAuthToken } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const Home = () => {
  const data = useSelector(selectAuthToken);

  return (
    <>
      <h1>Phonebook</h1>
      <p>Home page</p>
      {(!data || !data.token) && <p>Please Log In!</p>}
    </>
  );
};

export default Home;
