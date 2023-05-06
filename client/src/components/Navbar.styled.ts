import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ButtonsWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 200px;
  height: 60px;
  border-radius: 60px;
  background-color: grey;
`;

export const Button = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  border-radius: 40px;
  height: 60%;
  border: none;
  color: black;
  text-decoration: none;
  &:hover,
  &.active {
    background-color: white;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 150px;
`;
