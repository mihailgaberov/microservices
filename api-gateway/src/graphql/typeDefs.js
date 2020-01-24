import { gql } from "apollo-server";

const typeDefs = gql`
  type Listings {
    description: String!,
    id: ID,
    title: String!
  }
  
  type User {
    email: String!,
    id: ID!
  }
  
  type Mutation {
    createUser(email: String!, password: String!): User!
  }
  
  type Query {
    listings: [Listings!]!
  }
`;

export default typeDefs;
