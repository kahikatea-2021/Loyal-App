import { registerRootComponent } from 'expo'
import React, { useState, useLayoutEffect } from 'react'
import {
    SafeAreaView, TextInput, Text, Button, StyleSheet, KeyboardAvoidingView,
} from 'react-native'
import { auth } from '../auth/index'

function RegisterScreen ({ navigation }) {
    const [userName, setUserName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Back to Login',
        })
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.update({
                    displayName: userName,
                })
            }).catch((error) => alert(error.message))
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <SafeAreaView>
                <Text>Create a Loyal Account</Text>
                <TextInput
                    placeholder="User Name"
                    autofocus
                    type="text"
                    value={userName}
                    onChangeText={(text) => setUserName(text)}
                />
                <TextInput
                    placeholder="First Name"
                    type="text"
                    value={firstName}
                    onChangeText={(text) => setFirstName(text)}
                />
                <TextInput
                    placeholder="Last Name"
                    type="text"
                    value={lastName}
                    onChangeText={(text) => setLastName(text)}
                />
                <TextInput
                    placeholder="phone"
                    type="tel"
                    value={phone}
                    keyboardType="numeric"
                    onChangeText={(num) => setPhone(num)}
                />
                <TextInput
                    placeholder="email"
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    placeholder="password"
                    type="password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={register}
                />
            </SafeAreaView>
            <SafeAreaView>
                <Button raised style={styles.button} onPress={register} title="Register" />
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {

    },
})

export default RegisterScreen
