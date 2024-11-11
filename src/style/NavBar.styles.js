import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  box-sizing:border-box;
  align-items: center;
  justify-content: space-between;
  //justify-content: flex-start;
  //gap: 20px;
  padding: 10px 20px;
  background-color: darkslategray;
  color: #fff;
  position: fixed;
  left:0;
  
  top: 0;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled(Link)`//Link 컴포넌트로 수정
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f0f0f0;
  color: #333;
  font-weight: bold;

  &:hover {
    background-color: #e0e0e0;
  }
`;


export const SearchInput = styled.input`

  width:200px;
  z-index: 10;

  padding: 8px;
  margin-left: 20px;
  border: none;
  
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  color:#000;
`;