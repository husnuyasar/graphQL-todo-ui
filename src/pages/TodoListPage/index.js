import React from "react";
import TodoList from "../../components/TodoList";
import GroupLogo from "./../../assets/icons/group.svg";
import {
  HeaderTitle,
  PageContainer,
  ImageContainer
} from "../../assets/common";
import { Stack } from "@mui/material";
import { useAuthContext } from "../../context/auth";

const TodoListPage = () => {
  const { Logout } = useAuthContext();

  return (
    <PageContainer className="Rectangle">
      <div
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          cursor: "pointer",
        }}
        onClick={() => Logout()}
      >
        Logout
      </div>
      <Stack
        component="form"
        sx={{
          width: "25ch",
        }}
        spacing={2}
        noValidate
        autoComplete="off"
        className="todo-form"
      >
        <ImageContainer className="Group" src={GroupLogo} alt="check-img" />
        <HeaderTitle className="Welcome">Todo List</HeaderTitle>
        <TodoList />
      </Stack>
    </PageContainer>
  );
};

export default TodoListPage;
