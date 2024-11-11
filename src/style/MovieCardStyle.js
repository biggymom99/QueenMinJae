import styled from "styled-components";

export const Card = styled.div`
  width: 120px;
  height: 200px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  margin-top: 50px;

  color: #333;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

    /* 태블릿 화면용 미디어 쿼리 */
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 200px;
  }

  /* 모바일 화면용 미디어 쿼리 */
  @media screen and (max-width: 480px) {
    width: 120px;
  }
  
  &:hover {
    transform: translateY(-5px);
    transition: transform 0.2s ease;
  }
`;

export const Poster = styled.img`
  width: 120px;
  height: 150px;
  object-fit: cover;

  /* 태블릿 화면용 미디어 쿼리 */
  @media screen and (max-width: 768px) {
    width: 150px;
  }

  /* 모바일 화면용 미디어 쿼리 */
  @media screen and (max-width: 480px) {
    width: 120px;
  }
`;

export const Title = styled.h2`
  font-size: 8px;
  font-weight: bold;
  color: #333;
  text-align: left;
  margin-left: 3px;

  @media screen and (max-width: 768px) {
    font-size: 8px;
  }

  @media screen and (max-width: 480px) {
    font-size: 5px;
  }
`;

export const VoteAverage = styled.p`
  font-size: 8px;
  color: #555;
  text-align:right;
  margin-right: 3px;

  @media screen and (max-width: 768px) {
    font-size: 7px;
  }

  @media screen and (max-width: 480px) {
    font-size: 5px;
  }
`;