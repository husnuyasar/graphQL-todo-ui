import { gql } from '@apollo/client';

const EDIT_TODO = gql`
    mutation editTodo($editTodoInput: EditTodoInput!) {
        editTodo(editTodoInput: $editTodoInput) {Id,Description,Checked}
    }
`;

export {EDIT_TODO};