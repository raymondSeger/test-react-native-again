import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Greeting } from './Greeting.js';
import { Blink } from './Blink.js';

export default class App extends React.Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <View style={styles.container}>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />

                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />

                <Image source={pic} style={{width: 193, height: 110}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex            : 1,
        backgroundColor : '#fff',
        alignItems      : 'center',
        justifyContent  : 'center',
    },
});
