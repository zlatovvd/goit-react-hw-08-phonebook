import css from './AppBar.module.css';
import Navigation from '../Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import UserMenu from 'components/UserMenu/UserMenu';

const AppBar = () =>{
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <header className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    )
}

export default AppBar;