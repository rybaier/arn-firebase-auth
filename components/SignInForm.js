import React, { Component, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import axios from 'axios'
import firebase from 'firebase'

const ROOT_URL = 'https://us-central1-one-time-password-d2581.cloudfunctions.net'

const SignInForm = () => {
    const [phone, setPhone ] = useState('')
    const [ code, setCode ] = useState('')
    

    const handleSubmit = async () => {
        try {        
           let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`,
            { phone:phone, code:code })

            firebase.auth().signInWithCustomToken(data.token)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View>
              <Input 
            label = 'Enter Phone Number' 
            value= { phone }
            onChangeText= { setPhone }
            />
            <Input 
            label = 'Enter code' 
            value= { code }
            onChangeText= { setCode }
            />
            <Button title ='Submit' onPress={ handleSubmit }/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SignInForm