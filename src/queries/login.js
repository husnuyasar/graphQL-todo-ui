import { gql } from '@apollo/client';

const LOG_IN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username,password:$password) {
            access_token,
            user {FullName,Email,Id}
        }
    }
`;

export {LOG_IN};