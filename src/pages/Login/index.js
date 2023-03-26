import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { useMutation } from '@apollo/client';
import { LOG_IN } from "../../queries/index";
import GroupLogo from './../../assets/icons/group.svg';
import { useAuthContext } from "../../context/auth";
import { HeaderTitle, SubHeaderTitle, PageContainer, ImageContainer, ButtonContainer, TextUnderline } from "../../assets/common";
import { useNavigate } from "react-router-dom";

const Login  = () => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [login, { loading, error, data }] = useMutation(LOG_IN);
    const {
        Authentication,
        StoreUserDatas
    } = useAuthContext();
    const navigate = useNavigate();
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        login( 
            {
                update: (proxy, { data }) => {
                    
                    if (data && data.login && data.login.user) {
                        const {access_token, user } = data.login;
                        Authentication(access_token);
                        StoreUserDatas(user);
                        navigate('/todo')
                    }
                },
                variables: {
                    username: username,
                    password: password,
                }
            }
        );
        setUsername("")
        setPassword("")
    }
    
    return (
        <PageContainer className="Rectangle">
            <Stack
                component="form"
                sx={{
                    width: '25ch',
                }}
                spacing={2}
                noValidate
                autoComplete="off"
                onSubmit={onSubmitHandler}
            >
                <ImageContainer className="Group" src={GroupLogo} alt="group-image"/>
                <HeaderTitle className="Welcome-back">Welcome Back</HeaderTitle>
                <SubHeaderTitle className="Log-in-to-continue">Log in to continue.</SubHeaderTitle>
                <TextField type="text" value={username} name="username" onChange={e => setUsername(e.target.value)} placeholder="User Name" variant="standard" />
                <TextField type="password" value={password} name="password" onChange={e => setPassword(e.target.value)} placeholder="Password" variant="standard" />

                <TextUnderline onClick={() => navigate('/register')}>Do have an account?</TextUnderline>
                <ButtonContainer type="submit" variant="contained">Log In</ButtonContainer>
            </Stack>
        </PageContainer>
    )
}

export default Login;