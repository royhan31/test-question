const getPagination = (size, page) => {
  const limit = size && !isNaN(size) && size > 5 ? +size : 5;
  const offset = page && !isNaN(page) && page > 0 ? (page * limit) - limit : 0;
  return { limit, offset };
};

const getPagingData = (val, page, limit) => {
  const { count: totalItems, rows: data } = val;
  const currentPage = page && page > 1 ? +page : 1;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, data, totalPages, currentPage };
};

module.exports = {
  getPagination,
  getPagingData
};
