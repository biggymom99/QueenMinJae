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
  background-color: darkred;
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
  border-color: black;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled(Link)`//Link 컴포넌트로 수정
  padding: 8px 16px;
  border: none;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #121212;
  color: white;
  //font-weight: bold;

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

// 프로필 썸네일 스타일
export const ProfileThumbnail = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #fff;
  object-fit: cover;
`;

// 드롭다운 메뉴 스타일
export const DropdownMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #fff;
  color: #121212;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 150px;
  z-index: 1000;
`;

// 드롭다운 아이템 스타일
export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

// 반응형 디자인 (모바일 화면)
export const MobileMenu = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;