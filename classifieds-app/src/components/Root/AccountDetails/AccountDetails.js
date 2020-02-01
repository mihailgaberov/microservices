import React, { useState } from "react";
import { useSelector } from "react-redux";

import Account from "./Account";
import Login from "./Login";
// import SignUp from "./SignUp";

const AccountDetails = () => {
  const session = useSelector(state => state.session);
  const [isSigningUp, setIsSigningUp] = useState(false);

  if (session) return <Account />;

  return isSigningUp ? (
    <h1>sign up</h1>
    // <SignUp onChangeToLogin={() => setIsSigningUp(false)} />
  ) : (
    <Login onChangeToSignUp={() => setIsSigningUp(true)} />
  );
};

export default AccountDetails;

