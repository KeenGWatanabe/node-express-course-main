const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    name: 'albany',
  })
  res.status(200).json({ products, nbHits: products.length })
}
const getAllProducts = async (req, res) =>{
  const { featured, company, name } = req.query //key values used in query
  const queryObject = {}

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false
  }
  if (company) {
    queryObject.company = company 
  }
  console.log(queryObject)
  const products = await Product.find(req.query); console.log(req.query)
  res.status(200).json({ products, nbHits: products.length })
}

module.exports ={
  getAllProducts,
  getAllProductsStatic,
}