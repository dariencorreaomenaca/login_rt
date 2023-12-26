import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./reducer/auth";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

const rootReducer = combineReducers({
    auth: authReducer,

});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch | any;;

export const userAppDispatch = () => useDispatch<AppDispatch>;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;
