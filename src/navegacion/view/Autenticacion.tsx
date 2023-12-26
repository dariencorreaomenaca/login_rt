import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../../login/views/SignIn";
import SignUp from "../../login/views/SignUp";

type AthenticationParamList ={
    SignIn : undefined;
    SignUp : undefined;

}

const Stack = createNativeStackNavigator<AthenticationParamList>();

export const Autenticacion = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
        </Stack.Navigator>
    )
}