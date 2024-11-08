import styled from "styled-components";

export const Card = styled.div`
  width: 120px;
  height: 200px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  
  color: #333;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    transition: transform 0.2s ease;
  }
`;

export const Poster = styled.img`
  width: 120px;
  height: 160px;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: 8px;
  font-weight: bold;
  color: #333;
  text-align: left;
  margin-left: 3px;
`;

export const VoteAverage = styled.p`
  font-size: 8px;
  color: #555;
  text-align:right;
  margin-right: 3px;
`;