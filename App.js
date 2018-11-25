import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Greeting } from './Greeting.js';
import { Blink } from './Blink.js';

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

export default class App extends React.Component {

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <View style={styles.container}>
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