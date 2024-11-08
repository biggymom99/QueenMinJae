import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";

// 전체 레이아웃 컨테이너
const Container = styled.div`
  display: flex;
  gap: 20px; // 포스터와 정보 섹션 사이 간격
`;

const Poster = styled.img`
  width: 500px;
  max-width: 1000px;
  border-radius: 8px;
`;

// 정보 섹션
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; // 각 정보 항목 사이의 간격
`;

// 제목과 평점 컨테이너
const TitleAndRating = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 장르와 줄거리 섹션
const Genre = styled.footer`
  font-size: 1rem;
  color: #333;
`;

const Overview = styled.p`
  font-size: 1rem;
  color: #666;
`;

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
      <Poster className="w-[50%]" src={imgUrl} />

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