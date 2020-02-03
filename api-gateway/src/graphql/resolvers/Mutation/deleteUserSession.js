import UsersService from "#root/adapters/UsersService";

const deleteUserSessionResolver = async (obj, { sessionId }, context) => {
  const body = UsersService.deleteUserSession({ sessionId });

  console.log('>>>deleteUserSessionResolver body:', body);

  context.res.clearCookie("userSessionId");

  return true;
};

export default deleteUserSessionResolver;
