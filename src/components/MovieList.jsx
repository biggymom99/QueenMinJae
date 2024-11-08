import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";


export default function MovieList(){
    const [movies, setMovies] = useState([]);
    const url = `${import.meta.env.VITE_API_URL}/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`;
    useEffect(()=>{
      const fetchMovies = async()=>{
        try{
          const response = await fetch(url);
          const result = await response.json();
          setMovies(result); //데이터를 movies에 저장
        } catch(error){
          console.error('Fetching Error : ',error);
        }
      };
      fetchMovies();
 
    },[]); //의존성배열 []로 마운트 시 실행
    return(
        <div className="movie-list">
            {movies.results? (movies.results.map((movie)=>(
                <MovieCard key={movie.id} movie={movie}/>
            ) 
            )) : (
                <p>L O A D I N G . . .</p>
            )}
        </div>
    )
};