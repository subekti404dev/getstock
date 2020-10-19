import PexelsSearch from "../vendors/pexels/search";
import PixabaySearch from "../vendors/pixabay/search";
import UnsplashSearch from "../vendors/unsplash/search";

interface Options {
  page?: number;
  perPage?: number;
  type?: "pexels" | "pixabay" | "unsplash";
}

interface Search {
  getData: (keyword: string, page?: number, perPage?: number) => any;
}

interface Vendor {
  id: string;
  search: Search;
}

const vendors: Vendor[] = [
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
    const perPage = options.perPage || 20;
    const page = options.page || 1;
    const type = options.type || "pexels";
    const vendor = vendors.find((v) => type === v.id);
    const search: any = vendor?.search.getData;
    return search(keyword, page, perPage);
  }
}

export { Search };
