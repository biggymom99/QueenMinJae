import React, { useState } from "react";
import { supabase } from "../services/supabaseClient";
import { Button, Container, FormWrapper, Input, Title } from "../style/SignUp.styles";


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // 회원가입 처리 함수
  const handleSignUp = async () => {
    // 비밀번호 확인 검사
    if (password !== confirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    // Supabase 회원가입 요청
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name }, // 사용자 이름 추가
      },
    });

    if (error) {
      console.error("회원가입 오류:", error.message);
      setErrorMessage(error.message);
    } else {
      console.log("회원가입 성공:", data);
      setSuccessMessage("회원가입이 완료되었습니다! 이메일을 확인하세요.");
    }
  };

  // 폼 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    handleSignUp();
  };

  return (
    <Container>
      <FormWrapper>
        <Title>회원가입</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <Input
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button type="submit">회원가입</Button>
        </form>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      </FormWrapper>
    </Container>
  );
};


export default SignUp;
