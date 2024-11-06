import React from 'react';
import movieListData from './assets/movieListData.json';
import MovieCard from '../components/MovieCard';
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/detail.jsx'

// MovieCard들을 담을 Flex 컨테이너
const MovieFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;               // 자동으로 줄바꿈
  gap: 10px;
  justify-content: space-between; // 여백 균일하게 분배
  padding: 20px;
`;


const MovieList = () => {
  const movies = movieListData.results.slice(0, 20);  // 처음 20개의 영화만 가져오기

  return (
    <MovieFlexContainer>
      {movies.map((movie, index) => (
        <MovieCard key={movie.id || index} movie={movie} />
      ))}
    </MovieFlexContainer>
  );
};

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList/>}/>
        <Route path="/detail/:movieId" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;