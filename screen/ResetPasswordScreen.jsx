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
    const [email, setEmail] = useState('')

    const reset = () => {
        auth.sendPasswordResetEmail(email)
            .then((email) {
                if (email) {
                    alert(email)
                    navigation.replace('BottomNavigation')
                }
            }).catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                alert(errorMessage)
            })
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Back to Login',
        })
    }, [navigation])

    return (
        <KeyboardAvoidingView behavior="position" style={styles.container}>
            <TextInput
                style={styles.inputContainer}
                placeholder="E-mail"
                autoCapitalize="none"
                type="email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <SafeAreaView>
                <Button raised style={styles.button} onPress={reset} title="Reset" />
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default ResetPassword
