import PexelsSearch from "../vendors/pexels/search";
import PixabaySearch from "../vendors/pixabay/search";
import UnsplashSearch from "../vendors/unsplash/search";

interface Options {
  page?: number;
  perPage?: number;
  type?: "all" | "pexels" | "pixabay" | "unsplash";
}

const vendors = [
  {
    id: "pexels",
    search: PexelsSearch,
  },
  {
    id: "pixabay",
    search: PixabaySearch,
  },
  {
    id: "unsplash",
    search: UnsplashSearch,
  },
];

class Search {
  static async getData(keyword: string, options: Options = {}) {
    const perPage = options.perPage || 10;
    const page = options.page || 1;
    const type = options.type || "all";

    if (type === "all") {
      let results = [];
      const vendorCount = vendors.length;
      const modulus = perPage % vendorCount;
      const divider = Math.floor(perPage / vendorCount);
    
      for (let index = 0; index < vendorCount; index++) {
        const vendor = vendors[index];
        const isLast = index === vendorCount - 1;
        const perPage = isLast ? divider + modulus : divider;
        let data = [];
        if (perPage > 0) {
          const res = await vendor.search.getData(keyword, page, perPage);
          data = res.results;
        }
        results = results.concat(data);
      }
      return results;
    }
  }
}

export { Search };

Search.getData("nude").then(console.log);
