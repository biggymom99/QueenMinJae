import { useParams } from "react-router-dom"
import movieDetailData from '../assets/movieDetailData.json';
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
    const { movieId } = useParams()

    const imgUrl = `https://image.tmdb.org/t/p/w500/${movieDetailData.poster_path}`
    console.log(movieId)
    return (
        <Container>
            <Poster className="w-[50%]" src = {imgUrl}/>

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