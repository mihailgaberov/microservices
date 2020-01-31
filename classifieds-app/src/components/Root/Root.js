import React, {useState, useEffect } from "react";
import gql from "graphql-tag";
import styled from "styled-components";
import AccountDetails from "./AccountDetails";
import graphqlClient from "#root/api/graphqlClient";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  width: 80%;
`;

const Content = styled.div`
  flex: 1;
  margin-right: 1rem; 
`;

const Sidebar = styled.div`
  flex: 0 auto;
  width: 10rem;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 1rem;
`;

const query = gql`
{
  userSession(me: true) {
    id
    user {
      email
      id
    }
  }
}
`;

const Root = () => {
  const [initialised, setInitialised] = useState(false);

  useEffect(() => {
    graphqlClient.query(({query}).then(({data}) => {
      if (data.userSession) {
        dispatch(setSession(data.userSession));
      }
      setInitialised(true);
    }));
  }, []);

  if (!initialised) return "Lloading...";


  return <Wrapper>
    <Container>
      <Content>content</Content>
      <Sidebar><AccountDetails /></Sidebar>
    </Container>
  </Wrapper>
};

export default Root;
