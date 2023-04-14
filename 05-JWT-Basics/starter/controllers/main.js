// chk username, password in pot(login) request
// if exist create new JWT
// send back to frontend

// setup authentication so only the request with JWT can access the dashboard
const CustomeAPIError = require('../errors/custom-error')

const login = async (req, res) => {
const {username,password} = req.body
// mongoose validation
// Joi pckg
// check in the controller
if(!username || !password){
throw new CustomeAPIError('Please provide email and password', 400)
}
  console.log(username,password)
  res.send('Fake Login/Register/SignUp Route')
}

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)
  res.status(200).json({msg:`Hello, John Doe`,secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
  login,
  dashboard,
}