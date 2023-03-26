import { gql } from '@apollo/client';

const DELETE_TODO = gql`
    mutation addTodo($id: Float!) {
        deleteTodo(id: $id) {Id,Description,Checked}
    }
`;

export {DELETE_TODO};