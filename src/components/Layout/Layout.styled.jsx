import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: block;
  margin-right: 45px;
  padding: 20px 0;
  text-decoration: none;
  font-size: 25px;
  font-weight: 600;

  color: beige;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #ffffff;
  }
  &.active {
    /* height: 50px; */
    color: orange;
  }
`;

export const StyledHeader = styled.header`
  height: 60px;
  background-color: #1f1f1f;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;
