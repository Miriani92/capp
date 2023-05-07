import { ButtonsWrapper, Button, Container } from "./Navbar.styled";

export const Navbar = () => {
  return (
    <Container>
      <ButtonsWrapper>
        <Button to="/">Dashboard</Button>
        <Button to="/chart">Chart</Button>
      </ButtonsWrapper>
    </Container>
  );
};
