import React, { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import {
  NavBarContainer,
  Logo,
  ProfileThumbnail,
  DropdownMenu,
  DropdownItem,
  Button,
  ButtonContainer,
} from "../style/NavBar.styles";

export default function NavBar() {
  const {user, setUser} = useAuth();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

 // 로그아웃 함수
 const handleLogout = async () => {
  console.log("로그아웃 함수 호출됨");
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("로그아웃 오류:", error.message);
      return;
    }
    console.log("로그아웃 성공");
    setUser(null);
    navigate("/login"); // 로그아웃 후 로그인 페이지로 이동
  } catch (err) {
    console.error("예상치 못한 오류:", err);
  }
};

// 드롭다운 메뉴 토글 함수
const toggleDropdown = () => {
  setDropdownVisible((prev) => !prev);
};

  return (
    <NavBarContainer>
      <Logo to="/">무비두비 샤랄랄라</Logo>

      {/* 사용자가 로그인 한 경우 */}
      {user ? (
        <>
          {/* 사용자 썸네일 이미지 표시 */}
          <ProfileThumbnail
            src={user.user_metadata.avatar_url || "https://via.placeholder.com/40"}
            alt="Profile Thumbnail"
            onClick={toggleDropdown}
          />
          {/* 드롭다운 메뉴 - 썸네일 클릭 시 표시 */}
          {dropdownVisible && (
            <DropdownMenu>
              <DropdownItem>
                <Link to="/profile">마이 페이지</Link>
              </DropdownItem>
              <DropdownItem onClick={handleLogout}>로그아웃</DropdownItem>
            </DropdownMenu>
          )}
        </>
      ) : (
         // 사용자가 로그아웃 상태 일 때 로그인 버튼 표시
        <ButtonContainer>
          <Button to="/login">로그인</Button>
          <Button to="/SignUp">회원가입</Button>
        </ButtonContainer>
        
      )}
    </NavBarContainer>
  );
}
