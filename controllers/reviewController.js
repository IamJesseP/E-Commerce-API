const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const Review = require('../models/Review');
const Product = require('../models/Product');
const {
  createTokenUser,
  attachCookiesToRes,
  checkPermissions,
} = require('../utils');

const createReview = async (req, res) => {
  const { product: productId } = req.body;
  const isValidProduct = await Product.findOne({ _id: productId });
  if (!isValidProduct) {
    throw new CustomError.NotFoundError(`No product with id: ${productId}`);
  }
  const alreadySubmitted = await Review.findOne({
    product: productId,
    user: req.user.userId,
  });
  if (alreadySubmitted) {
    throw new CustomError.BadRequestError(
      'Already submitted review for this product.',
    );
  }

  req.body.user = req.user.userId;
  const review = await Review.create(req.body);
  res.status(StatusCodes.CREATED).json({ review });
};
const getAllReviews = async (req, res) => {
  const reviews = await Review.find({});
  res.status(StatusCodes.OK).json({ reviews });
};
const getSingleReview = async (req, res) => {
  const { _id: reviewId } = req.params;
  const review = await Review.findOne(reviewId);
  if (!review) {
    throw new CustomError.NotFoundError(`No review with id: ${reviewId}`);
  }
  res.status(StatusCodes.CREATED).json({ review });
};
const updateReview = async (req, res) => {
  res.send('update review route');
};
const deleteReview = async (req, res) => {
  const { _id: reviewId } = req.params;
  const review = await Review.findOne(reviewId);
  if (!review) {
    throw new CustomError.NotFoundError(`No review with id: ${reviewId}`);
  }
  checkPermissions(req.user, review.user);
  await review.deleteOne();
  res.status(StatusCodes.OK).json({ msg: 'Review deleted' });
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
