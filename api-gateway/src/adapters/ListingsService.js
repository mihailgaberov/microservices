import got from "got";
import accessEnv from "#root/helpers/accessEnv";

const LISTINGS_SERVICE_URI = accessEnv("LISTINGS_SERVICE_URI");

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
