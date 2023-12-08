import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  Gal_Product: {
    type: number,
    required: true,
  },
  Oz_Product: {
    type: number, 
    required: true,
  },
  ml_product: {
    type: number,
    required: true,
  },
  Gal_Water: {
    type: number,
    required: true,
  },
  L_Water: {
    type: number,
    required: true,
  },
  Acre: {
    type: number,
    required: true,
  },
  Ha: {
    type: number,
    required: true,
  },
  Price: {
    type: number,
    required: true,
  },
});

export default mongoose.model('Product', productSchema);
