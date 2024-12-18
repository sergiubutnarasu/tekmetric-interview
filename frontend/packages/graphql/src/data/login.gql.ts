import { gql } from '@apollo/client'

export default gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
    }
  }
`
