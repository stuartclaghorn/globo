import React from 'react';
import { StyleSheet, Image } from 'react-native';

export class Hero extends React.Component {
    render() {
        return (
            <Image source={ require('./img/laptop2.jpg')}
                style={styles.heroImage} 
                resizeMode={"contain"}
            />
        );
    }
}

var styles = StyleSheet.create({
    heroImage: {
        flex: 8,
        width: 400,
        height: 300,
    }
});