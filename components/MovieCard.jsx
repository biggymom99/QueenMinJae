import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
  width: 100px;
  height: 160px;
  //padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  //text-align: center;
  color: #333;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    transition: transform 0.2s ease;
  }
`;

const Poster = styled.img`
  width: 100px;
  height: 120px;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 8px;
  font-weight: bold;
  color: #333;
`;

const VoteAverage = styled.p`
  font-size: 8px;
  color: #555;
`;

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const imgUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  return (
    <Card onClick={() => navigate(`/detail/${movie.id}`)}>
      <Poster 
        src={imgUrl} 
        alt={`${movie.title} Poster`} 
      />
      <Title>{movie.title}</Title>
      <VoteAverage>평점: {movie.vote_average}</VoteAverage>
    </Card>
  );
};

export default MovieCard;
