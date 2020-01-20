import got from "got";

const LISTINGS_SERVICE_URI = "http://listings-service:7100";

export default class ListingsService {
  static async fetchAllListings() {
    return got.get(`${LISTINGS_SERVICE_URI}/listings`).json();
  }
}
