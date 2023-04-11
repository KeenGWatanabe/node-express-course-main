const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({})
  .sort('name')
  .select('name price')
  .limit(10)
  .skip(5)
  res.status(200).json({ products, nbHits: products.length })
}
const getAllProducts = async (req, res) =>{
  const { featured, company, name, sort, fields } = req.query //key values used in query
  const queryObject = {}

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' } 
  }

  console.log(queryObject)
  let result = Product.find(queryObject)
  //sort
  if(sort) {
    const sortList = sort.split(',').join('');
    result = result.sort(sortList)
  }else{
    result = result.sort('createAt')
  }
  //fields
  if(fields) {
    const fieldsList = fields.split(',').join('');
    result = result.select(fieldsList)
  }else{
    result = result.select('createAt')
  }
  const page = Number(req.query.page) || 1  //if page no. OR 1
  const limit = Number(req.query.limit) || 10 //if limit OR 10 items per page
  const skip = (page-1) * limit;  // eg page 3, (3-1)*10

  result = result.skip(skip).limit(limit)
  // 23 items 3 pages  if pages stated eg 2, (2-1)*10=10 shows page 2, 10items per page

  const products = await result
  res.status(200).json({ products, nbHits: products.length })
}

module.exports ={
  getAllProducts,
  getAllProductsStatic,
}