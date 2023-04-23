import css from './NotFound.module.css';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: teal;
`;

const NotFound = () => {
  return (
    <>
      <h1>404 Page not found!</h1>
      <p>The resource requested could not be found on this server!</p>
      <p>Here are some helpful links:</p>
      <StyledLink to="/" className={css.link}>
        Home
      </StyledLink>
      <StyledLink to="/contacts">Contacts</StyledLink>
    </>
  );
};

export default NotFound;
