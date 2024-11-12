import React, { useState } from "react";
import { supabase } from "../services/supabaseClient";
import { Container, FormWrapper, Title, Input, Button } from "../style/SignUp.styles";
import { useAuth } from "../context/AuthContext";
import SocialLogin from "../components/SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //사용자 상태 업데이트
  const {setUser} = useAuth();

  // 로그인 처리 함수
  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("로그인 오류:", error.message);
      setErrorMessage("로그인에 실패했습니다. 이메일과 비밀번호를 확인하세요.");
    } else {
      console.log("로그인 성공:", data);
      setErrorMessage("");
      setEmail("");
      setPassword("");
      setUser(data.user); // user의 전역상태 업데이트 
      const userName = data.user.user_metadata?.name || "사용자";
      alert(`${userName}님 안녕하세요 !`)
    }
  };

  // 폼 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <Container>
      <FormWrapper>
        <Title>로그인</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">로그인</Button>
        </form>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <SocialLogin/>
      </FormWrapper>
    </Container>
  );
};

export default Login;
