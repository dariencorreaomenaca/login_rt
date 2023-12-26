import { useAuth, useAutDispatch } from "../context";
import { AuthActionTypes, AuthFormValues } from "../types";

export const useAuthentication = () => {
    const  state = useAuth();
    const dispatch =  useAutDispatch();

    const signIn = async ({mail, password}: AuthFormValues) => {
        console.log(mail, password);
        // TODO:  aqui llamamos al servicio de login para la autenticacion
        dispatch({
            type: AuthActionTypes.SIGN_IN,
            payload: {token:'123123aldjiawijld'},
        })
    }

    const signUp = async ({mail, password}: AuthFormValues) => {
        console.log(mail, password);
        // TODO:  aqui llamamos al servicio de registro para la autenticacion
        dispatch({
            type: AuthActionTypes.SIGN_UP,
            payload: {token:'123123aldjiawijld'},
        })
    }

    const restoreToken = async () => {
        try {
            let token = '';
            if (token) {
                dispatch({
                    type: AuthActionTypes.RESTORE_TOKEN,
                    payload: {token},
                })
            }
        } catch (error) {
            
        }

        dispatch({
            type: AuthActionTypes.SIGN_UP,
            payload: {token:'123123aldjiawijld'},
        })
    }

    const signOut = async () => {

        dispatch({
            type: AuthActionTypes.SIGN_OUT
        })
    }

    return {
        ... state,
        signIn,
        signOut,
        signUp,
        restoreToken
    }

}