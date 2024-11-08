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
        <Title>Sign Up</Title>
        <form>
          Name
          <Input type="text" required/>
          Email
          <Input type="email" required />
          Password
          <Input type="password" required />
          Comfirm Password
          <Input type="password" required />
          <Button type="submit">Sign Up</Button>
        </form>
      </FormWrapper>
    </Container>
  );
}
