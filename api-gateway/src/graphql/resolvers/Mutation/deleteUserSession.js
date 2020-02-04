import UsersService from "#root/adapters/UsersService";

const deleteUserSessionResolver = async (obj, { sessionId }, context) => {
  try {
    await UsersService.deleteUserSession({ sessionId });
    context.res.clearCookie("userSessionId");
    return true;
  } catch (e) {
    throw new Error(">>> Deleting user session failed with error: " + e);
  }
};

export default deleteUserSessionResolver;
