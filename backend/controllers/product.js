import Product from "../models/product.js";

const getAllProducts = async (req, res) => {
    try {
        const allProduct = await Product.find();

        res.status(200).json({
            allProduct
        })

    }
    catch (err) {
        console.log("getAllProducts verisi çekilemedi!", err)
    }
}

export { getAllProducts }

