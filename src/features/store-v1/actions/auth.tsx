import { Dispatch } from "redux"
import { AuthAction, AuthActionTypes, AuthFormValues, AuthUser } from "../types"

export const signIn = ( {mail, password}: AuthFormValues) =>{
    return async (dispatch: Dispatch<AuthAction>) => {
        try {

            dispatch({type: AuthActionTypes.SIGN_IN_REQUEST});
            // const response = await fetch('',{
            //     method:'POST',
            //     headers:{
            //         'Content-Type': 'application/json',

            //     },
            //     body : JSON.stringify({mail,password})
            // }
            // );
            // const data = await response.json();
            const data: AuthUser = {
                token: '123',
            };
            if (!data) {
                dispatch({type:AuthActionTypes.SIGN_IN_FAILURE, payload:'Error'});
            }
            dispatch({type:AuthActionTypes.SIGN_IN_SUCCESS, payload:data});

        } catch (error) {
            dispatch({type:AuthActionTypes.SIGN_IN_FAILURE, payload:'Error'});

        }
    }
}

