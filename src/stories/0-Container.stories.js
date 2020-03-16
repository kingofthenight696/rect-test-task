import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Switch } from '../components/Switch';
import Container from '../components/Container';
import Text from '../components/Text';
import { withPropsTable } from 'storybook-addon-react-docgen';


export default {
    title: 'ContainerExample',
    component: Container,
    decorators: [withKnobs, withPropsTable],
};

const state = [
    'enabled',
    'disabled'
]
export const General = () => (
    <Container>
        <Text type={"h1"} elementType={"title"}>
            Eat Now Features
            🍽️
        </Text>
        <Text className="App-form-subtitle" type={"h2"} elementType={"subtitle"}>
            Do you want diners to be able to request tables?
        </Text>
        <Switch isEnabled={boolean('Enabled/Disabled', false)} onSwitchChanged={action('clicked')}/>
        <Text className="App-form-message" type={"p"} elementType={"message"}>
            This setting determines whether or not diners can request to ‘Eat Now’ at your restaurant.
        </Text>
    </Container>
);