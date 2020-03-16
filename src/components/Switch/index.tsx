import React from "react";
import {SwitchBox, SwitchContainer, SwitchIndicator} from "./components";
import Text from "../Text";

interface Props {
  isEnabled: boolean;
  onSwitchChanged: (e: Event) => void;
}

export function Switch(props: Props) {
  const {isEnabled, onSwitchChanged} = props;
  const text = isEnabled ? "Enabled" : "Disabled";

  return (
    <SwitchContainer onClick={onSwitchChanged}>
      <Text type="p" elementType="switchIndicator">{text}</Text>
      <SwitchBox isEnabled={isEnabled}>
        <SwitchIndicator isEnabled={isEnabled}/>
      </SwitchBox>
    </SwitchContainer>
  );
}