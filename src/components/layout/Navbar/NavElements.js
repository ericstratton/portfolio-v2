import styled from 'styled-components';
import { Link } from 'react-scroll';


export const Nav = styled.nav`
  background: ${props => props.theme.colors.dark};
  height: 4em;
  display: flex;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.body};
  top: 0;
  position: sticky;
  z-index: 99;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  max-width: ${props => props.theme.width.max};
  margin: 0 auto;
  padding: 0 3.5em;
  height: inherit;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  height: 100%;
`;

export const NavItem = styled.li`
  margin-top: 1.5em;
  padding: 0 1rem;

  &:hover {
    border-bottom: 3px solid ${props => props.theme.colors.primary};
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;