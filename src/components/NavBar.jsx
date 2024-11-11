import React, { useState } from "react";
import { NavBarContainer, Logo, ButtonContainer, Button } from "../style/NavBar.styles";
import Search from "./Search";



export default function NavBar() {

  return (
    <NavBarContainer>
      <Logo to="/">무비두비 샤랄랄라</Logo>

      <Search onSearch={(query) => console.log("검색어:", query)} />


      <ButtonContainer>
        <Button to="/login">로그인</Button>
        <Button to="/signup">회원가입</Button>
      </ButtonContainer>

    </NavBarContainer>
  );
}
