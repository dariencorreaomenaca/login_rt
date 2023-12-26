import { AuthActionTypes } from "../types";
import { AuthAction, AuthState } from "../types";

export const authReducer = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
        case AuthActionTypes.SIGN_IN:
            return{
                ... state,
                user: action.payload,
                isAuthenticated: true,
            }
            break;
        case AuthActionTypes.SIGN_UP:
            return{
                ... state,
                user: action.payload,
                isAuthenticated: true,
            }
            break;
        case AuthActionTypes.SIGN_OUT:
            return{
                ... state,
                user: null,
                isAuthenticated: false,
            }
            break;
        case AuthActionTypes.RESTORE_TOKEN:
            return{
                ... state,
                user: action.payload,
                isAuthenticated: true,
            }
            break;
    
        default:
            return state;
    }
}