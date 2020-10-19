const axios = require("axios");
const { normalizePixabay } = require("./normalize");
const { PixabayConstant } = require("./constant");
const { baseUrl, key } = PixabayConstant;

class Search {
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

module.exports = Search;
