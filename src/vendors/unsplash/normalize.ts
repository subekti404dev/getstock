export const normalizeUnsplash = (data) => {
  const total = data.total;
  const modulus = total % data.perPage;
  const divide = Math.floor(total / data.perPage);
  const results = data.results.map((d, i) => {
    return {
      id: d.id,
      type: "unsplash",
      urls: {
        small: d.urls.small,
        medium: d.urls.regular,
        large: d.urls.full,
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
