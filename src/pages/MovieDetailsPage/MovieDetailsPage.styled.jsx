import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledButton = styled.button`
  position: absolute;
  font-family: Roboto, sans-serif;
  font-weight: 498;
  font-size: 15px;
  color: #fff;
  background-color: #00b4d8;
  padding: 10px 38px;
  border: none;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 50px;
  transition: 436ms;
  transform: translateY(0);
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    transition: 436ms;
    padding: 10px 50px;
    transform: translateY(-0px);
    background-color: #fff;
    color: #00b4d8;
    /* border: solid 2px #0066cc; */
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: Roboto, sans-serif;
  font-weight: 0;
  font-size: 14px;
  color: #fff;
  background-color: #0066cc;
  padding: 10px 30px;
  border: 2px solid #0066cc;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 50px;
  transition: 243ms;
  transform: translateY(0);
  display: flex;
  align-items: center;

  &:hover {
    transition: 243ms;
    padding: 10px 41px;
    transform: translateY(-0px);
    background-color: #fff;
    color: #0066cc;
    border: solid 2px #0066cc;
  }
`;

export const LargeCaption = styled.h1`
  margin-bottom: 20px;
`;

export const MiddleCaption = styled.h3`
  margin-bottom: 15px;
`;

export const MiniCaption = styled.h4`
  margin-bottom: 10px;
`;

export const Img = styled.img`
  border-radius: 10px;
`;
