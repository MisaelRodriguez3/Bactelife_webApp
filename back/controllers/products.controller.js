import Product from '../models/products.model.js'

export const addProduct = async (req, res) => {
    const { name, description, price } = req.body;
    try {
        const newProduct = new Product({
            name,
            description,
            price
        });
        await newProduct.save();
        res.send(`${newProduct.name} added`)

    } catch (error) {
        console.log(error);
    }
}
export const getProduct = (req, res) => {

}
export const getProducts = (req, res) => {

}
export const updateProduct = (req, res) => {

}
export const deleteProduct = (req, res) => {

}