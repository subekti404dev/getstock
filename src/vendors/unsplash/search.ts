import axios from "axios";
import { UnsplashConstant } from "./constant";
import { normalizeUnsplash } from "./normalize";
const { baseUrl } = UnsplashConstant;

export default class Search {
  static async getData(keyword, page = 1, perPage = UnsplashConstant.perPage) {
    keyword = keyword.split(" ").join("+");
    const url = `${baseUrl}napi/search/photos?query=${keyword}&xp=&per_page=${perPage}&page=${page}`;
    const data = await axios.get(url).then((res) => res.data);
    if (data) {
      data["perPage"] = perPage;
      return normalizeUnsplash(data);
    } else {
      return {
        total: 0,
        totalPage: 0,
        perPage: perPage,
        results: [],
      };
    }
  }
}
