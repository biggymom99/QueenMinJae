import styled from "styled-components";

// 전체 레이아웃 컨테이너
export const Container = styled.div`
  display: flex;
  gap: 20px; // 포스터와 정보 섹션 사이 간격
`;

export const Poster = styled.img`
    margin-top: 100px;
    margin-right: 20px;
    margin-left: 20px;
  width: 600px;
  max-width: 1000px;
  border-radius: 8px;
`;

// 정보 섹션
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; // 각 정보 항목 사이의 간격
  margin-top:100px;
  color:white;
`;

// 제목과 평점 컨테이너
export const TitleAndRating = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:white;
  margin-right: 50px;
`;

// 장르와 줄거리 섹션
export const Genre = styled.footer`
  font-size: 1rem;
  color: #333;
  color:white;
`;

export const Overview = styled.p`
  font-size: 1rem;
  color: #666;
`;