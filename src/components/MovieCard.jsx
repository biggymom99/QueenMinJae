import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Movie.css'
import '../style/MovieCardStyle.js'
import { Card, Poster, Title, VoteAverage } from '../style/MovieCardStyle.js';



const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const imgUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  return (
    <Card className="movie-card" onClick={() => navigate(`/detail/${movie.id}`)}>
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
