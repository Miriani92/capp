import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ButtonsWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 250px;
  height: 70px;
  border-radius: 70px;
  background-color: #e2e8f0;
`;

export const Button = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  border-radius: 40px;
  height: 40px;
  border: none;
  color: black;
  text-decoration: none;
  &:hover,
  &.active {
    background-color: #bdc7d4;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 150px;
`;
