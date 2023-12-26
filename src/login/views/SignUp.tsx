import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const SignUp = () => {
    return (
        <View style={Styles.container}>
            <Text>SingUp</Text>
        </View>
    )
}

export default SignUp;