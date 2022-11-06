import React, { Component, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import axios from 'axios'

const ROOT_URL = 'https://us-central1-one-time-password-d2581.cloudfunctions.net'

const SignUpForm = () => {
    const [phone, setPhone ] = useState('')
    

    const handleSubmit = async () => {
        try {        
            await axios.post(`${ROOT_URL}/createUser` , { phone: phone })
            await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: phone })
        } catch (err) {
            console.log(err)
        }
    }

// refactored to above 
    // const handleSubmit = () => {
    //     axios.post(`${ROOT_URL}/createUser` , {
    //         phone: phone
    //     })
    //     .then(() => {
    //         axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: phone })
    //     })
    
    // }
    return (
        <View>
            <Input 
            label = 'Enter Phone Number' 
            value= { phone }
            onChangeText= { setPhone }
            />
            <Button title ='Submit' onPress={ handleSubmit }/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SignUpForm