import React from "react";
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        //backgroundColor: 'red',
    },
    card: {
        width: '95%',
        height: '70%',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.36,
        shadowRadius: 5,
        
        elevation: 11,
        // backgroundColor: 'red',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'flex-end',
    },
    name: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowRadius: 5,
    },
    bio: {
        fontSize: 18,
        color: 'white',
        lineHeight: 24,
        textShadowColor: 'black',
        textShadowRadius: 3,
    },
    cardInner: {
        padding: 15,
        alignItems: 'flex-end'
    },
})

export default styles