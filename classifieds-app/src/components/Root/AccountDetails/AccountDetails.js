import React from "react";
import { useSelector } from "react-redux";

import Login from "./Login";

const AccountDetails = () => {
  const session = useSelector(state => state.session);

  if (session) return "Account";

  return <Login />
};

export default AccountDetails;
