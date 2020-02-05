import got from "got";

const LISTINGS_SERVICE_URI = "http://listings-service:7100";

export default class ListingsService {
  static async fetchAllListings() {
    return got.get(`${LISTINGS_SERVICE_URI}/listings`).json();
  }

  static async createListing({description, title}) {
    const body = got.post(`${LISTINGS_SERVICE_URI}/listings`, {
      json: {
        description,
        title
      }
    }).json();
    return body;
  }
}
