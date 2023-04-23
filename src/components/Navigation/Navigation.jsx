import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/authSelectors';
import styled from 'styled-components';

const Navigation = () => {
  const data = useSelector(selectAuthToken);
  const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: orange;
    }
  `;

  return (
    <nav>
      <StyledLink className={css.link} to="/">
        Home
      </StyledLink>
      {data && data.token && (
        <StyledLink className={css.link} to="/contacts">
          Contacts
        </StyledLink>
      )}
    </nav>
  );
};

export default Navigation;
