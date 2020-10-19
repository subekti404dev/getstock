const axios = require("axios");
const { normalizePexels } = require("./normalize");
const { PexelsConstant } = require("./constant");
const { baseUrl, key } = PexelsConstant;

class Search {
  static async getData(keyword, page = 1, perPage = PexelsConstant.perPage) {
    keyword = keyword.split(" ").join("+");
    const url = `${baseUrl}search?query=${keyword}&per_page=${perPage}&page=${page}`;
    const opt = {
      headers: {
        Authorization: key,
      },
    };
    const data = await axios.get(url, opt).then((res) => res.data);
    if (data) {
      data["perPage"] = perPage;
      return normalizePexels(data);
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
