import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { signIN } from "../../features/store-v2/features/auth/auth.slices";
import { userAppDispatch,useAppSelector } from "../../features/store-v2";
import { AuthState } from "../../features/store-v2/features/auth/types";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const SignIn = () => {
    const dispatch = userAppDispatch();
    const auth = useAppSelector<AuthState>(state => state.auth);

    const onHandlerSignIn = () =>{
        dispatch(signIN({mail: 'aa@example.com', password:'12345'}));
    }

    useEffect(() =>
    {
        if (auth.isError) {
            Alert.alert('Error', ' algo ocurrio');
        }
    },[auth])
    return (
        <View style={Styles.container}>
            <Text>Sing In </Text>
            <Button title="Login" color="#EC5B70" onPress={onHandlerSignIn}/>
        </View>
    )
}

export default SignIn;