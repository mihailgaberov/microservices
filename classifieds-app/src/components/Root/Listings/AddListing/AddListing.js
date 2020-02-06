import React from "react";
import  {useMutation} from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import TextInput from "#root/components/shared/TextInput";
import TextArea from "#root/components/shared/TextArea";
import { useSelector } from "react-redux";

const Button = styled.button`
  display: inline-block;
  margin-top: .5rem;
`;

const Form = styled.form`
  background-color: ${props => props.theme.whiteSmoke};
  margin-top: 1rem;
  padding-top: 1rem;
`;

const Label = styled.label`
  display: block;
  
  :not(:first-child) {
    margin-top: 0.5rem;
  }
`;

const LabelText = styled.strong`
  display: block;
  font-size: .9rem;
  margin-bottom: 0.5rem; 
`;

const mutation = gql`
  mutation($description: String!, $title: String!) {
    createListing(description: $description, title: $title) {
      id
    }
  }
`;

const AddListing = ({ onAddListing: pushAddListing }) => {
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
    reset
  } = useForm();
  const [createListing] = useMutation(mutation);
  const session = useSelector(state => state.session);

  if (!session) return <p>Please login to add listings.</p>;

  const onSubmit = handleSubmit(async ({ title, description }) => {
    await createListing({ variables: { description, title } });
    reset();
    pushAddListing();
  });

  return <Form onSubmit={onSubmit}>
    <Label>
      <LabelText>Title</LabelText>
      <TextInput disabled={isSubmitting} ref={register} name="title" type="text" />
    </Label>
    <Label>
      <LabelText>Description</LabelText>
      <TextArea disabled={isSubmitting} ref={register} name="description" />
    </Label>
    <Button type="submit" disabled={isSubmitting}>Add Listing</Button>
  </Form>
};

export default AddListing;
