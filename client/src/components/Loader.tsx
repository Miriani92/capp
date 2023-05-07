import { Spin } from "antd";
import { Wrapper } from "./Loader.styled";

export const Loader = () => {
  return (
    <Wrapper>
      <Spin size="large" spinning />;
    </Wrapper>
  );
};
