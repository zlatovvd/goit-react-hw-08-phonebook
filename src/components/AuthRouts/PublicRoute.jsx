import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectAuthToken, selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = () => {
  const data = useSelector(selectAuthToken);
  return data && data.token ? <Navigate to="/contacts" replace /> : <Outlet />;
};
