import styled from 'styled-components';
import { Link } from 'react-scroll';


export const Nav = styled.nav`
  background: ${props => props.theme.colors.dark};
  height: 3.5em;
  display: flex;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.body};
  top: ${({scrollDown}) => (scrollDown ? '-3.5em' : 0)};
  transition: top 0.5s ease-in-out;
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
  align-items: center;
  height: 100%;
`;

export const NavItem = styled.li`
  margin: 0 1rem;
  height: 100%;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;

  &:hover,
  &.active {
    border-bottom: 3px solid ${props => props.theme.colors.primary};
  }
`;