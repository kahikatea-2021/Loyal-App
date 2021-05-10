import React, { useState, useLayoutEffect } from 'react'
import {
    TouchableOpacity,
    SafeAreaView,
    TextInput, Text,
    StyleSheet,
    KeyboardAvoidingView,
    Image,
    ScrollView,
    ActivityIndicator,
} from 'react-native'
import { auth } from '../auth'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#49378E',
        alignItems: 'center',
        justifyContent: 'center',

    },
    inputContainer: {
        fontSize: 20,
        borderWidth: 0,
        borderRadius: 12,
        borderColor: '#1282E9',
        backgroundColor: '#fff',
        padding: 9,
        margin: 4,
    },
    button: {
        width: 200,
        marginTop: 10,
        color: '#FCFAF1',
    },
    logo: {
        width: 170,
        height: 205,
        alignSelf: 'center',
        top: 10,
        marginBottom: 20,
        borderRadius: 15,
    },
    register: {
        flexDirection: 'row',
    },
    wrap: {
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#1282E9',
        backgroundColor: '#3C97EA',
        padding: 9,
        margin: 4,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
})
function StoreAccountScreen () {
    const signOutUser = () => {
        auth.signOut()
    }
    return (
        <KeyboardAvoidingView behaviour="position" style={styles.container}>
            <TouchableOpacity style={styles.wrap} onPress={signOutUser}>
                <Text style={styles.text}>Sign Out</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default StoreAccountScreen
