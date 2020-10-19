export const normalizePixabay = (data) => {
  const total = data.total;
  const modulus = total % data.perPage;
  const divide = Math.floor(total / data.perPage);
  const results = data.hits.map((d, i) => {
    return {
      id: d.id,
      type: "pixabay",
      urls: {
        small: d.previewURL,
        medium: d.fullHDURL,
        large: d.largeImageURL,
      },
    };
  });
  return {
    total: data.total,
    totalPage: modulus === 0 ? divide : divide + 1,
    perPage: data.perPage,
    results,
  };
};
