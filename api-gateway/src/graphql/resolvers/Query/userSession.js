const userSessionResolver = async (obj, args, context) => {
  if (args.me !== true) throw new Error("Unsupported argument value");
console.log('>>>> userSessionResolver', context);
  return context.res.locals.userSession;
};

export default userSessionResolver;
