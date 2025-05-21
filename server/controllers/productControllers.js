const Product = require('../models/Product')

exports.getAllProducts = async(req,res) => {
    try {
        const getProducts = await Product.find({userId: req.user.id});
        if(!getProducts) {
            return res.status(404).json({message: 'no products found'});
        }
        return res.status(200).json({messaage: `Successfully fetched products`,products: getProducts});
    }catch(err) {
        return res.status(500).json({message: `Error while fetching Products`,error:err});
    }
}

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create({ ...req.body, userId: req.user.id });
    console.log(product)
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error while creating Product", error });
  }
};


exports.editProduct = async(req,res) => {
    const {id} = req.params;
    try{
        const updateProduct = await Product.findByIdAndUpdate(
            id,
            {$set: req.body},
            {
                new:true,
                runValidators: true
            }
        );

        if(!updateProduct) {
            return res.status(404).json({message:`Can't find the product`});
        }

        return res.status(200).json({message: `Successfully updated the product details`});

    }catch(err) {
        return res.status(500).json({message:'Error while updating product details',error:err});
    }
}

exports.deleteProduct = async(req,res) => {
    const {id} = req.params;
    try{
        const delProduct = await Product.findByIdAndDelete(id);
        if(!delProduct) {
            return res.status(404).json({message: `Product not found`});
        }

        return res.status(200).json({message:'Deleted Product successfully'});
    }catch(err) {
        return res.status(500).json({message: `Error while deleting product`,error:err});
    }
}

exports.getFeaturedProducts = async(req,res) => {
    try{
        const featuredProducts = await Product.find({featured:true});
        if(!featuredProducts) {
            return res.status(404).json({message:`Featured products not found`});
        }

        return res.status(200).json({message: 'Successfully fetched featured products',products:featuredProducts});
    }catch(err) {
        return res.status(500).json({message: `Error while fetching featured products`,error:err});
    }
}

exports.getProductsByMaxPrice = async (req, res) => {
  const maxPrice = Number(req.params.max);

  if (isNaN(maxPrice)) {
    return res.status(400).json({ message: "Invalid max price value" });
  }

  try {
    const products = await Product.find({ price: { $lt: maxPrice } });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products by price", error });
  }
};

exports.getProductsByMinRating = async (req, res) => {
  const minRating = Number(req.params.min);

  if (isNaN(minRating)) {
    return res.status(400).json({ message: "Invalid rating value" });
  }

  try {
    const products = await Product.find({ rating: { $gt: minRating } });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products by rating", error });
  }
}