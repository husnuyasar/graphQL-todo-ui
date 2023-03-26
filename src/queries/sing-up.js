import { gql } from '@apollo/client';

const SING_UP = gql`
    mutation singUp($createUserInput: CreateUserInput!) {
        singUp(createUserInput: $createUserInput) 
        {
            Id,
            FullName,
            Email
        }
    }
`;

export {SING_UP};