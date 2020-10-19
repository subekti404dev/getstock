const PexelsSearch = require("../vendors/pexels/search");
const PixabaySearch = require("../vendors/pixabay/search");
const UnsplashSearch = require("../vendors/unsplash/search");

class Search {
  static async getData(keyword, page = 1, perPage = 50) {
    const pexels = await PexelsSearch.getData(keyword, page, perPage);
    const pixabay = await PixabaySearch.getData(keyword, page, perPage);
    const unsplash = await UnsplashSearch.getData(keyword, page, perPage);
    return { pexels, pixabay, unsplash };
  }
}

module.exports = {
  Search
}

// Search.getData("ironman", 2, 10).then(console.log);
