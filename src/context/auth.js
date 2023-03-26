import React, {useContext, createContext, useEffect} from 'react';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext({});

const AuthProvider = (properties) => {
    const userToken = localStorage.getItem("access_token")
    const profileToken = localStorage.getItem("user")

    const defaultState = {
        token: '',
        isLoggedIn: false,
        user: {}
    }

    const initialAuthState = {
        token: userToken,
        isLoggedIn: true,
        user: userToken ? jwt_decode(userToken) : {}
    } 
    
    const defaultProfile = {
        username: "",
        sub: ""
    }

    const [authState, setAuthState] = React.useState(userToken ? initialAuthState : defaultState)
    const [userProfile, setUserProfile] = React.useState(profileToken ? JSON.parse(profileToken) : defaultProfile);

    useEffect(() => {
        if(authState.isLoggedIn){
            return localStorage.setItem("access_token", authState.token)
        }
    },[authState.token])
    
    useEffect(() => {
        if(userToken){
            Authentication(userToken)
        }
    },[userToken])

    const Authentication = (token) => {
        setAuthState({
            ...authState,
            token,
            isLoggedIn: true,
            user: jwt_decode(token)
        })
    };

    const Logout = () => {
        localStorage.clear("access_token");
        setAuthState(defaultState)
    }

    useEffect(() => {
        if(!authState.isLoggedIn){
            localStorage.clear("user")
            return setUserProfile()
        }
    },[authState.isLoggedIn])

    const StoreUserDatas = (user) => {
        localStorage.setItem("user", JSON.stringify(user))
        setUserProfile(user)
    }

    const AuthContextValue = {
        authState,
        userProfile,
        Authentication,
        Logout,
        StoreUserDatas
    } 

    return <AuthContext.Provider value={AuthContextValue} {...properties} />
}

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider }