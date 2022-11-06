import React, { Component, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'

const SignUpForm = () => {
    const [phone, setPhone ] = useState('')

    const handleSubmit = () => {
        
    }

    return (
        <View>
            <Input 
            label = 'Enter Phone Number' 
            value= { phone }
            onChangeText= { setPhone }
            />
            <Button title ='Submit' onPress={() => handleSubmit }/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SignUpForm