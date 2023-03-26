import { gql } from '@apollo/client';

const ADD_TODO = gql`
    mutation addTodo($todo: String!) {
        addTodo(todo: $todo) {Id,Description,Checked}
    }
`;

export {ADD_TODO};