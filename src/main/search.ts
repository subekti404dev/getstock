import PexelsSearch from "../vendors/pexels/search";
import PixabaySearch from "../vendors/pixabay/search";
import UnsplashSearch from "../vendors/unsplash/search";

class Search {
  static async getData(keyword: string, page: number = 1, perPage: number = 50) {
    const pexels = await PexelsSearch.getData(keyword, page, perPage);
    const pixabay = await PixabaySearch.getData(keyword, page, perPage);
    const unsplash = await UnsplashSearch.getData(keyword, page, perPage);
    return { pexels, pixabay, unsplash };
  }
}

export { Search };

// Search.getData("ironman", 2, 10).then(console.log);
