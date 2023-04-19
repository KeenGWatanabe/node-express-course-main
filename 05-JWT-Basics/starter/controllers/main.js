// chk username, password in pot(login) request
// if exist create new JWT
// send back to frontend

// setup authentication so only the request with JWT can access the dashboard
const jwt = require('jsonwebtoken')
const CustomeAPIError = require('../errors/custom-error')

const login = async (req, res) => {
const {username,password} = req.body
// mongoose validation
// Joi pckg
// check in the controller

if(!username || !password){
  throw new CustomeAPIError('Please provide email and password', 401)
}

// for demo, normally provided by DB!!!
const id = new Date().getDate()


// $ npm install jsonwebtoken; try to keep payload small, better experience for user
// just for demo, in production use long, complex, unguessable string value!!!!!
const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'})
res.status(200).json({msg:'user created', token})

}  

const dashboard = async (req,res) =>{
  const authHeader = req.headers.authorization;

  if(!authHeader || !authHeader.startsWith('Bearer ')){
    throw new CustomeAPIError('No token', 401)
  }
  
const token = authHeader.split(' ')[1]
try {
  const decoded = jwt.verify(token,process.env.JWT_SECRET);
  console.log(decoded);
  const luckyNumber = Math.floor(Math.random()*100);
  res.status(200).json({msg:`Hello, ${decoded.username}`,secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
} catch (error) {
  throw new CustomeAPIError('Not authorized to access this route', 401)
}

}

module.exports = {
  login,
  dashboard,
}