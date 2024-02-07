 // chk username, password in pot(login) request
// if exist create new JWT
// send back to frontend
// setup authentication so only the request with JWT can access the dashboard

const jwt = require('jsonwebtoken')
const { BadRequestError, CustomAPIError } = require('../errors')

const login = async (req, res) => {
const {username,password} = req.body
// mongoose validation
// Joi pckg
// check in the controller

if(!username || !password){
  throw new BadRequestError ('Please provide email and password', 401)
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

if(!authHeader || !authHeader.startsWith('Bearer')){
  throw new CustomeAPIError('no token provided', 401)
}
  
const token = authHeader.split('')[1]
try{
  const decoded = jwt.verify(token,process.env.JWT_SECRET)
  console.log(decoded);
} catch (error){
  throw new CustomAPIError('Not authorized to access this route',401)

}




  res.status(200).json({
    msg:`Hello, ${req.user.username}`,
    secret:`Here is your authorized token data, your sequence is ${luckyNumber}`
    
  })
    
}

module.exports = {
  login,
  dashboard,
}