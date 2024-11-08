import React, { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/detail.jsx'
import MovieList from './components/MovieList.jsx';


//useEffect로 처음 렌더링 시 API 호출 실행
//상태에 저장해서 컴포넌트가 그 데이터를 기반으로 렌더링 되게
//API 응답데이터에서 20개 씩 추출


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