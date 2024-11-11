import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import { Container, Genre, InfoSection, Overview, TitleAndRating } from "../style/Detail"
import { Poster } from "../style/Detail";

export default function Detail() {
  const { movieId } = useParams();
  const [movieDetailData, setMovieDetailData] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTZhMGQyNTg4ZmQ2OGJjY2M0Njg4NTY2Y2RjNzhmZiIsIm5iZiI6MTczMTA0ODY3NS42Mzc0MTQyLCJzdWIiOiI2NTI2NjBmNTBjYjMzNTE2ZjVjNzRjMGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wc1p1BrQjsaXfNZ3h0NJuG89Z63Qni6kor0mGrfvkp8',
            },
          }
        );
        const data = await response.json();
        setMovieDetailData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  if (!movieDetailData) {
    return <div>L o a d i n g . . .</div>;
  }

  const imgUrl = `https://image.tmdb.org/t/p/w500/${movieDetailData.poster_path}`;

  return (
    <Container>
      <Poster src={imgUrl} />

      <InfoSection>
        <TitleAndRating>
          <h1>{movieDetailData.title}</h1>
          <h2>{movieDetailData.vote_average}</h2>
        </TitleAndRating>
        <Genre>
          <h2>
            {movieDetailData.genres.map((genre) => genre.name).join(', ')}
          </h2>
        </Genre>
        <Overview>
          <p>{movieDetailData.overview}</p>
        </Overview>
      </InfoSection>
    </Container>
  );
}