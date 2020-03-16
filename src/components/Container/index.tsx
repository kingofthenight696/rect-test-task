import React from "react";
import styled from "styled-components";

export interface Props {
  children: React.ReactNode;
}

const StyledContainer: React.FC<Props> = styled.div`
  width: 470px;
  background-color: white;
  padding: 38px 35px;
  display: flex;
  flex-direction: column;
`;

export const Container: React.FC<Props> = ({ children, ...props }: Props) => (
  <StyledContainer {...props}>{children}</StyledContainer>
);

export default Container;
