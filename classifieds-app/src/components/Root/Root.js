import React from "react";
import styled from "styled-components";
import Login from "./Login";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  width: 80rem;
`;

const Content = styled.div`
  flex: 1;
  margin-right: 1rem; 
  background-color: blue;
`;

const Sidebar = styled.div`
background-color: red;
  flex: 0 auto;
  width: 10rem;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 1rem;
`;

const Root = () => {
  return <Wrapper>
    <Container>
      <Content>content</Content>
      <Sidebar><Login /></Sidebar>
    </Container>
  </Wrapper>
};

export default Root;
