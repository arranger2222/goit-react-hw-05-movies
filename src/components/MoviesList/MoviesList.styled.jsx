import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMovieCard = styled(Link)`
  display: block;
  text-decoration: none;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: #a52a2a;
  color: #fffaf0;
  box-shadow: 5px 5px 5px #282c34;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.01);
    box-shadow: 10px 10px 10px #282c34;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageWrapper = styled.div`
  display: block;
  height: 300px;
`;

export const ContentWrapper = styled.div`
  padding: 15px;
  p:first-child {
    margin-bottom: 10px;
  }
`;

export const Rating = styled.span`
  padding: 5px;
  background-color: ${({ rating }) => {
    if (rating > 6) {
      return '#8FBC8F';
    }
    if (rating >= 4 && rating <= 6) {
      return '#fc3';
    }
    return '#f00';
  }};
  border-radius: 10px;
  color: ${({ rating }) => (rating >= 4 && rating <= 6 ? 'black' : 'white')};
`;
