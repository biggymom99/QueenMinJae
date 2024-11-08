import React from "react";
import {
  Container,
  FormWrapper,
  Title,
  Input,
  Button,
} from "../style/SignUp.styles";

export default function SignUp() {
  return (
    <Container>
      <FormWrapper>
        <Title>Log In</Title>
        <form>
          Email
          <Input type="email" required />
          Password
          <Input type="password" required />

          <Button type="submit">Log In</Button>
        </form>
      </FormWrapper>
    </Container>
  );
}
