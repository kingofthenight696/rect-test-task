import React, {useCallback, useState} from 'react'
import "./App.css";
import Container from "./components/Container";
import Text from "./components/Text";
import { Switch } from "./components/Switch";

function App() {
  const [isSwitchEnabled, setSwitchEnabled] = useState(false);

  const onSwitchChanged = useCallback(() => setSwitchEnabled(!isSwitchEnabled), [isSwitchEnabled]);

  return (
    <div className="App">
      <Container>
        <Text type={"h1"} elementType={"title"}>
          Eat Now Features
          🍽️
        </Text>
        <Text className="App-form-subtitle" type={"h2"} elementType={"subtitle"}>
          Do you want diners to be able to request tables?
        </Text>
        <Switch isEnabled={isSwitchEnabled} onSwitchChanged={onSwitchChanged}/>
        <Text className="App-form-message" type={"p"} elementType={"message"}>
          This setting determines whether or not diners can request to ‘Eat Now’ at your restaurant.
        </Text>
      </Container>
    </div>
  );
}

export default App;