import { gql } from "apollo-server";

const typeDefs = gql`
  type Listings {
    description: String!,
    id: ID,
    title: String!
  }
  
  type Query {
    listings: [Listings!]!
  }
`;

export default typeDefs;
