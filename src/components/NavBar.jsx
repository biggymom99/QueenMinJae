import React from "react";
import {Link} from "react-router-dom"
import { NavBarContainer, Logo, ButtonContainer, Button } from "../style/NavBar.styles";

export default function NavBar() {
  return (
    <NavBarContainer>
      <Logo to="/">무비두비 샤랄랄라</Logo>
      <ButtonContainer>
        <Button to="/login">로그인</Button>
        <Button to="/signup">회원가입</Button>
      </ButtonContainer>
    </NavBarContainer>
  );
}
