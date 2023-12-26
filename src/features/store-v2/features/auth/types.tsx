export enum AuthActionTypes {
    SIGN_IN= 'SIGN_IN',
    SIGN_OUT= 'SIGN_OUT',
    SIGN_UP= 'SIGN_UP',
    RESTORE_TOKEN=  'RESTORE_TOKEN',
}

export type AuthUser = {
    token: string;
}

export type AuthState ={
    isAuthenticated: boolean;
    user: {
        token:string,
    } | null;
    isLoading: boolean;
    isError: boolean;
    error :string | null | unknown;


};

export type RootState = {
    auth: AuthState;
}