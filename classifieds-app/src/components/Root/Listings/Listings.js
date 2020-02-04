import React from "react";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import styled from "styled-components";

const Description = styled.p`
  margin-bottom: 0;
`;

const Listing = styled.div`
  padding: 1rem 0;
  
  :not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.veryLightGrey};
  }
`;

const Title = styled.strong`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
`;

const query = gql`
  {
    listings {
      description
      id
      title
    }
  }
`;

const Listings = () => {
  const {data, loading} = useQuery(query);

  console.log('>>> data', data);

  if (loading) return "Loading...";

  return <div>
    {data.listings.map(listing => (
      <Listing key={listing.id}>
        <Title>{listing.title}</Title>
        <Description>{listing.description}</Description>
      </Listing>
    ))
    }
  </div>
};

export default Listings;
