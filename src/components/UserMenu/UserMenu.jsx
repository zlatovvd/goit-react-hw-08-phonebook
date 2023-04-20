import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectAuthUser } from 'redux/auth/authSelectors';
import { authLogoutThunk } from 'redux/auth/authThunk';

const UserMenu = () => {

  const {name} = useSelector(selectAuthUser);
  const dispatch =useDispatch();

  const handleClick = () => {
    dispatch(authLogoutThunk());
  }

  return (
    <div className={css.wrapper}>
      <p className={css.username}>{name}</p>
      <button type='button' onClick={handleClick}>Logout</button>
    </div>
  );
};

export default UserMenu;
