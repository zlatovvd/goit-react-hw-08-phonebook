import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectAuthToken } from 'redux/auth/authSelectors';

export const PrivateRoute = () => {
  const data = useSelector(selectAuthToken);
  return data && data.token ? <Outlet /> : <Navigate to="/login" replace />;
};
