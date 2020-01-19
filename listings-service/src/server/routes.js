import { Listings } from "#root/db/models";

const setupRoutes = app => {
  app.get("/listings", async (req, res) => {
    const listings = await Listings.findAll();
    return res.json(listings);
  });
};

export default setupRoutes;
