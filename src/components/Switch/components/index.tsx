import React from "react";
import styled from "styled-components";
import colors from "../../../res/colors";

interface SwitchContainerProps {
  onClick: any;
}
export const StyledSwitchContainer: React.FC<SwitchContainerProps> = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.switchBg};
  border-radius: 10px;
  padding: 0 20px;
  height: 42px;
  cursor: pointer;
`;


export const SwitchContainer: React.FC<SwitchContainerProps> = (props: SwitchContainerProps) => (
  <StyledSwitchContainer {...props}/>
);

interface SwitchBoxProps {
  isEnabled: boolean;
}
export const SwitchBox: React.FC<SwitchBoxProps> = styled.div`
  display: flex;
  width: 47px;
  height: 25px;
  border-radius: 32px;
  background-color: ${(props: SwitchBoxProps) => props.isEnabled ? colors.switchBoxActiveBg : colors.switchBoxInactiveBg};
  align-items: center;
  padding: 0 3px;
`;

export const SwitchIndicator: React.FC<SwitchBoxProps> = styled.div`
  width: 19px;
  height: 19px;
  border-radius: 100%;
  position: absolute;
  background-color: ${colors.switchIndicatorBg};
  transition: all 300ms;
  transform: translate(${(props: SwitchBoxProps) => props.isEnabled ? 0 : 28}px, 0px);
`;
