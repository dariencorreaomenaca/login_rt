import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTabs from './NavigationTab';
import { Autenticacion } from './Autenticacion';
import { useAuth } from '../../login/context';
import { useAppSelector } from '../../features/store-v2';





export const RootNavegation =() =>{
    const { isAuthenticated} = useAuth();
    const auth = useAppSelector(state => state.auth);
    

    console.warn(auth);
    return (
        <NavigationContainer>
            {auth.isAuthenticated ? <NavigationTabs/> : <Autenticacion/>}
        </NavigationContainer>
    )
}