import React from 'react';
import { Alert, Button, StyleSheet, Text, View, Image } from 'react-native';
import { Greeting } from './Greeting.js';
import { Blink } from './Blink.js';
import {PizzaTranslator} from "./PizzaTranslator";


const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    buttonContainer: {
        margin: 20
    },
    red: {
        color: 'red',
    },
});

export default class App extends React.Component {

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <View style={styles.container}>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me"
                    />
                </View>

                <PizzaTranslator />

                <Blink text='I love to blink' />

                <Text style={styles.red}>just red</Text>

                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />

                <Image source={pic} style={{width: 193, height: 110}}/>
            </View>
        );
    }
}