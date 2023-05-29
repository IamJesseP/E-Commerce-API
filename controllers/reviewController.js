const createReview = async (req, res) => {
  res.send('create review route');
};
const getAllReviews = async (req, res) => {
  res.send('get all reviews route');
};
const getSingleReview = async (req, res) => {
  res.send('get single review route');
};
const updateReview = async (req, res) => {
  res.send('update review route');
};
const deleteReview = async (req, res) => {
  res.send('delete review route');
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
