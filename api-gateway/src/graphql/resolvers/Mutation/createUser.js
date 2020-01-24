import UsersService from "#root/adapters/UsersService";

const createUserResolver = async (obj, { email, password }) => {
  return UsersService.createUser({ email, password });
};

export default createUserResolver;
