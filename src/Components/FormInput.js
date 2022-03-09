//import liraries
import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { windowHeight, windowWidth } from '../utils/Dimensions';
// create a component
const FormInput = ( {labelValue, placeholderText, iconType, ...rest}) => {
    return (
        
        <View style={styles.inputContainer}> 
            <View style={styles.iconStyle}>
                <AntDesign name={iconType} size = {25} color='#667' />
            </View>
            <TextInput 
                value = {labelValue}
                style={styles.input}
                numberOfLines = {1}
                placeholder={placeholderText}
                placeholderTextColor='#667'
                {...rest}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Arial',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        padding:10,
        marginTop: 5,
        marginBottom:10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1
    }
});

//make this component available to the app
export default FormInput;
