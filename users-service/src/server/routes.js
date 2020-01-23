const setupRoutes = app => {
  app.post("/users", async  (req, res, next) => {
      if (!req.body.email || !req.body.password) {
        return next(new Error("Invalid body."));
      }

      try {
        
      } catch (e) {

      }
  });
};

export default setupRoutes;
