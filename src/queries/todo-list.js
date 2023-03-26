import { gql } from '@apollo/client';

const GET_ALL = gql`
    query getAll($filter: FilterTodoInput!) {
        getAll(filter: $filter) {Id,Description,Checked}
    }
`;

export {GET_ALL};