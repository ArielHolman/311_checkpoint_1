const users = require('./../data/index')
let counter = users.length+1

// * listUsers
//   * Should retrieve the entire array from _data/index_
const listUsers = (req, res) => {
  res.json(users)
}

// * showUser
//   * Should retrieve just the user that matches the passed-in id
const listUsersById = (req, res) => {
  let foundUser = users.find( user => user.id === parseInt(req.params.id))
  res.json(foundUser)
}

// * createUser
//   * Should add a user to the array
const createNewUser = (req, res) => {
  users.push({
    id: counter++, ...req.body})
    res.json(users[users.length-1])
}
// * updateUser
//   * Should update one user in the array based on its id
const updateUser = (req, res) => {
  let foundUser = users.find( user => user.id === parseInt(req.params.id))
  console.log(foundUser)
  foundUser.name = req.body.name ? req.body.name : foundUser.name
  foundUser.username = req.body.username ? req.body.username : foundUser.username
  foundUser.email = req.body.email ? req.body.email : foundUser.email
  foundUser.address = req.body.address ? req.body.address : foundUser.address
  foundUser.phone = req.body.phone ? req.body.phone : foundUser.phone
  foundUser.website = req.body.website ? req.body.website : foundUser.website
  foundUser.company = req.body.company ? req.body.company : foundUser.company
  res.json(foundUser)
}

// * deleteUser
//   * Should delete one user from the array based on its id
const deleteUser = (req, res) => {
  let foundUser = users.find(user => user.id === parseInt(req.params.id))
  if (foundUser) {
    foundUser.isActive = false
    res.send('User unactivated!')
  } else {
    res.status(400).json({message: `No comment with the id of ${req.params.id}`})
  }
}

module.exports = {
  listUsers,
  listUsersById,
  createNewUser,
  updateUser,
  deleteUser
}
