import { createContext, useContext, useReducer } from "react"
import { AuthState } from "../types"
import { AuthProviderProps } from "../types";
import { authReducer } from "../reducer";

const initialState: AuthState = {
    isAuthenticated : false,
    signIn: () => {},
    signOut: () => {},
    signUp: () => {},
    restoredToken: () =>{},
    user : null,
    isLoading:false,
}

export const AuthContext = createContext<[AuthState, any]>([
    initialState,
    () => {},
]);

export const useAuth = () => useContext(AuthContext)[0];

export const useAutDispatch = () => useContext(AuthContext)[1];

export const AuthProvider = ({ children}: AuthProviderProps) => {
    return (
        <AuthContext.Provider value={useReducer(authReducer, initialState)}>
            {children}
        </AuthContext.Provider>
    );

} 