import React, { Component, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'

const SignUpForm = () => {
    const [phone, setPhone ] = useState('')
    return (
        <View>
            <Input 
            label = 'Enter Phone Number' 
            value= { phone }/>
            <Button title ='Submit' />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SignUpForm