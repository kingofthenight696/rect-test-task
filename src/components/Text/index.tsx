import React from "react";
import styled from "styled-components";
import colors from "../../res/colors";

export interface Props {
  type?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  elementType?: "title" | "subtitle" | "message" | "switchIndicator";
  className?: string;
}

interface TextProps extends Props {
  as: any;
}


const textStyles: any = {
  title: {
    fontSize: 24,
    fontWeight: 600
  },
  subtitle: {
    fontSize: 14
  },
  switchIndicator: {
    fontSize: 13
  },
  message: {
    fontSize: 10,
    color: colors.message
  }
}

const StyledText: React.FC<TextProps> = styled.div`
  font-family: Montserrat;
  text-align: start;
  ${(props: TextProps) => {
    // @ts-ignore
    return textStyles[props.elementType]
  }}
`;

export const Text: React.FC<Props> = ({type = "p", children, elementType = "title", ...props}: Props) => (
  <StyledText as={type} {...props} elementType={elementType}>{children}</StyledText>
);

export default Text;