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

export default function Detail(){

    const api_key= import.meta.env.VITE_API_KEY;
    const { movieId } = useParams();
    
    const [movieDetailData, setMovieDetailData] = useState();

    useEffect(()=>{
      const fetchMovieDetail = async()=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODEyNzk5YWVlY2RlYWM1NzNiNzUyZWU1YTUyMTAwZSIsIm5iZiI6MTczMDk5NTM1My44Mjc2MjE3LCJzdWIiOiI2NzJjOGQyOTkxNGJhZTk0YTFiYmE1OGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Qf0XFH61xlhHzjowGwZUW8xuhXHqokKXgkXALImo0UA'
            }
          }
        )
        const data = await response.json();
        console.log('data:',data)
        setMovieDetailData(data);
        
      } 
      fetchMovieDetail();
    },[]);
    console.log(movieDetailData)
    

    const imgUrl = `https://image.tmdb.org/t/p/w500/${movieDetailData.poster_path}`;

    if (!movieDetailData || !movieDetailData.poster_path) {
      return <p>Loading...</p>;
    }

    return (
        <Container>
            <Poster className="w-[50%]" src = {`${imgUrl}`}/>

            <InfoSection>
                <TitleAndRating>
                    <h1>{movieDetailData.title}</h1>
                    <h2>{movieDetailData.vote_average}</h2>
                </TitleAndRating>
                <Genre>
                    {/** movieDetailData.genres가 배열인데 그 안에 객체 자체를 렌더링할 수 없어서
                    각 객체의 name속성만 렌더링해야함. 
                    그래서 genres 배열에서, map 메서드로 각 장르의 name속성만 추출
                    join을 사용해 장르 이름을 쉼표로 구분된 문자열로 표시 가능*/}
                    <h2>{movieDetailData.genres.map(genre => genre.name).join(', ')}</h2>
                </Genre>
                <Overview>
                    <p>{movieDetailData.overview}</p>
                </Overview>
            </InfoSection>

        </Container>

    )
}