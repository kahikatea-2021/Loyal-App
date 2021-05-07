import { registerRootComponent } from 'expo'
import request from 'superagent'
import React, { useState, useLayoutEffect } from 'react'
import {
    SafeAreaView, TextInput, Text, Button, StyleSheet, KeyboardAvoidingView, Image, ScrollView,
} from 'react-native'
import { auth } from '../auth/index'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: 300,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#0B82D6',
        padding: 9,
        margin: 4,

    },
    button: {
        width: 200,
        // marginTop: 10,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    logo: {
        width: 170,
        height: 168,
        alignSelf: 'center',
        margin: 20,
        borderRadius: 10,
    },
})

function ResetPassword ({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Back to Login',
        })
    }, [navigation])

    return (
        <KeyboardAvoidingView behavior="position" style={styles.container}>
            <Text>hello</Text>
        </KeyboardAvoidingView>
    )
}

export default ResetPassword
