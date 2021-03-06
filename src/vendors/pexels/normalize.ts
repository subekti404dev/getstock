export const normalizePexels = (data) => {
  const total = data.total_results;
  const modulus = total % data.perPage;
  const divide = Math.floor(total / data.perPage);
  const results = data.photos.map((d, i) => {
    return {
      id: d.id,
      type: "pexels",
      urls: {
        small: d.src.small,
        medium: d.src.medium,
        large: d.src.large,
      },
    };
  });

  return {
    total: data.total_results,
    totalPage: modulus === 0 ? divide : divide + 1,
    perPage: data.perPage,
    results,
  };
};
