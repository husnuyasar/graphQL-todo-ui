import { useMutation, useQuery } from "@apollo/client";
import { Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { ADD_TODO, EDIT_TODO, GET_ALL, DELETE_TODO } from "../queries";
import { ReactComponent as PathCopy } from "./../assets/icons/path-copy.svg";
import { CancelSvgIcon, FormControlLabelContainer, StyledTypography, TypographyContainer  } from "./styled";

const TodoList = () => {
  const defaultElement = {
    Id: undefined,
    Description: "",
    Checked: false,
  };
  const [addTodo, { loading, error, data }] = useMutation(ADD_TODO);
  const [list, setList] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const {
    loading: getAllLoading,
    error: getAllError,
    data: getAllData,
  } = useQuery(GET_ALL, {
    variables: { filter: { CheckStatus: 0 } },
  });


  React.useEffect(() => {
    if (getAllData?.getAll.length > 0) {
      setList(getAllData.getAll);
    }
  }, [getAllData?.getAll]);

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      await onSubmit();
    }
  };

  const onSubmit = async () => {
    const result = await addTodo(
  {
        update: (proxy, { data }) => {
                          
            if (data && data.addTodo) {
                setList(data.addTodo);
                console.log("add list",list)
            }
        },
        variables: { todo: inputValue }
    });
    setList(result.data.addTodo);
  };

  const onChangeHandler = async (e) => {
    const result = await editTodo({
      update: (proxy, { data }) => {       
          if (data && data.editTodo) {
              setList(data.editTodo);
              console.log("edit list",list)
          }
      },
      variables: {
        editTodoInput: {
          Id: Number(e.target.value),
          Checked: e.target.checked,
        },
      },
    });
  };

  const [
    editTodo,
    { loading: editTodoLoading, error: editTodoError, data: editTodoData },
  ] = useMutation(EDIT_TODO);

  const [deleteTodo, { loading: deleteTodoLoading, error : deleteTodoError, data: deleteTodoData }] = useMutation(DELETE_TODO);

  const deleteTodoItem = async (id) => {
    const result = await deleteTodo({ variables: { id: id } });
    setList(result.data.deleteTodo);
  }

  const CheckStatus = {
    COMPLETED : 1,
    INCOMPLETED : 2
  };
  const [filter, setFilter] = React.useState()

  const filtered = (status) => {
    setFilter(status)
    const all = getAllData.getAll;
    setList(all);
    console.log("filter list",list)
    if(list.length > 0){
        const incompleted = all.filter(item => !item.Checked);
        const completed = all.filter(item => item.Checked);

        switch(status){
            case CheckStatus.COMPLETED: 
                setList(completed)
                break;
            case CheckStatus.INCOMPLETED: 
                setList(incompleted)
                break;
            default:
                setList(all)
                break;
        }
        return ;
    }
  } 

  const deleteTodoHandler = async(e) =>{
    await deleteTodoItem(Number(e.target.id));
  }

  return (
    <>
        <TextField
          variant="standard"
          type="text"
          value={inputValue}
          placeholder="Add a new todo"
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      {list.length > 0 &&
        list.map((item) => (
          <FormControlLabelContainer key={item.Id}>
            <FormControlLabel
              control={
                <Checkbox
                  id={item.Id}
                  style={{ padding: "8px" }}
                  defaultChecked={item.Checked}
                  onChange={onChangeHandler}
                  value={item.Id}
                />
              }
              label={item.Description}
            />
            <CancelSvgIcon id={item.Id} as={PathCopy} onClick={deleteTodoHandler} />
          </FormControlLabelContainer>
        ))}
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography>Show</Typography>
            <StyledTypography onClick={() => filtered(undefined)} using={filter === undefined}>All</StyledTypography>
            <StyledTypography onClick={() => filtered(CheckStatus.COMPLETED)}  using={filter === 0}>Completed</StyledTypography>
            <StyledTypography onClick={() => filtered(CheckStatus.INCOMPLETED)} using={filter === 1}>Incompleted</StyledTypography>
        </div>
    </>
  );
};

export default TodoList;
