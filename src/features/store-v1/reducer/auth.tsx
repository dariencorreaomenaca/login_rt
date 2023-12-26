import { AuthAction, AuthActionTypes } from "../types";

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    isError: false,
    error: null
};

export const authReducer = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case AuthActionTypes.SIGN_IN_REQUEST:
            return{
                ...state,
                isLoading: true
            }
            break;
        case AuthActionTypes.SIGN_IN_SUCCESS:
            return{
                ...state,
                isLoading: true,
                isAuthenticated: true,
            }
            break;
        case AuthActionTypes.SIGN_IN_FAILURE:
            return{
                ...state,
                isLoading: false,
                isError: true,
                error: action.payload,
                isAuthenticated: false,

            }
            break;
    
        default:
            return state;
    }
};