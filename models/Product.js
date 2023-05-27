const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: [true, 'Please provide product name'],
      maxLength: [100, 'Name can not be more than 100 characters'],
    },
    price: {
      type: Number,
      require: [true, 'Please provide product price'],
      default: 0,
    },
    description: {
      type: String,
      require: [true, 'Please provide product description'],
      maxLength: [1000, 'Description can not be more than 100 characters'],
    },
    image: {
      type: String,
      default: '/uploads/example.jpeg',
    },
    category: {
      type: String,
      require: [true, 'Please provide product category'],
      enum: ['office', 'kitchen', 'bedroom'],
    },
    company: {
      type: String,
      require: [true, 'Please provide company'],
      enum: {
        values: ['ikea', 'liddy', 'marcos'],
        message: '{VALUE} is not supported',
      },
    },
    colors: {
      type: [String],
      require: true,
    },
    feautured: {
      type: Boolean,
      require: false,
    },
    freeShipping: {
      type: Boolean,
      require: false,
    },
    inventory: {
      type: Number,
      require: true,
      default: 15,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Product', ProductSchema);
