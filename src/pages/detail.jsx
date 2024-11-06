import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import movieDetailData from './assets/movieDetailData.json';

export default function Detail(){
    const { movieId } = useParams()
    const movie = movieDetailData.find(movie => movie.id === Number(movieId));

    const imgUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    console.log(movieId)
    return (
        <>
            <img className="w-[200px]" src = {imgUrl}/>

            <div>
                <div>{movie.title}</div>
                <div>{movie.vote_average}</div>
                <div>{movie.genres}</div>
                <div>{movie.genres}</div>

            </div>
        </>

    )
}