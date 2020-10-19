import axios from "axios";
import { normalizePixabay } from "./normalize";
import { PixabayConstant } from "./constant";
const { baseUrl, key } = PixabayConstant;

export default class Search {
  static async getData(keyword, page = 1, perPage = PixabayConstant.perPage) {
    keyword = keyword.split(" ").join("+");
    const url = `${baseUrl}?key=${key}&q=${keyword}&image_type=photo&pretty=true&per_page=${perPage}&page=${page}`;
    const data = await axios.get(url).then((res) => res.data);
    if (data) {
      data["perPage"] = perPage;
      return normalizePixabay(data);
    } else {
      return {
        total: 0,
        perPage: perPage,
        results: [],
      };
    }
  }
}

