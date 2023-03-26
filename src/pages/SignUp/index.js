import React, { useState } from "react";
import { TextField, Stack } from "@mui/material";
import GroupLogo from "./../../assets/icons/group.svg";
import { SING_UP } from "../../queries/index";
import { useMutation } from "@apollo/client";
import {
  HeaderTitle,
  SubHeaderTitle,
  PageContainer,
  ImageContainer,
  ButtonContainer,
  TextUnderline
} from "../../assets/common";
import { useNavigate } from "react-router-dom";

const SingUp = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();


  const [singUp, { loading, error, data }] = useMutation(SING_UP);
  const onSubmitHandler = (e) => {
    singUp({
      variables: {
        createUserInput: {
          FullName: fullname,
          Email: email,
          Password: password,
        },
      },
    });
    setFullname("");
    setEmail("");
    setPassword("");
    navigate("/todo")
  };


  return (
    <PageContainer className="Rectangle">
      <Stack
        component="form"
        sx={{
          width: "25ch",
        }}
        spacing={2}
        noValidate
        autoComplete="off"
        onSubmit={onSubmitHandler}
        className="sign-up-form"
      >
        <ImageContainer className="Group" src={GroupLogo} alt="check-img" />
        <HeaderTitle className="Welcome">Welcome!</HeaderTitle>
        <SubHeaderTitle className="Sign-up-to-start-usi">
          Sign up to start using Simpledo today.
        </SubHeaderTitle>
        <TextField
          variant="standard"
          type="text"
          value={fullname}
          placeholder="Full Name"
          onChange={(e) => {
            e.preventDefault();
            setFullname(e.target.value);
          }}
        />
        <TextField
          variant="standard"
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
        />
        <TextField
          variant="standard"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        />
        <TextUnderline onClick={() => navigate('/')}>Don’t have an account? Sign up.</TextUnderline>
        <ButtonContainer variant="contained" type="submit">
          Sign Up
        </ButtonContainer>
      </Stack>
    </PageContainer>
  );
};

export default SingUp;
