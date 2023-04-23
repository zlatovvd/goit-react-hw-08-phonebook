import css from './AppBar.module.css';
import Navigation from '../Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/authSelectors';
import UserMenu from 'components/UserMenu/UserMenu';

const AppBar = () => {
  const data = useSelector(selectAuthToken);
  return (
    <header className={css.header}>
      <Navigation />
      {data && data.token ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
