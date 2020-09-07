const users = require('./../data/index')
// let counter = users.length+1

// The end result of your routes should look like this: `router.get('/users', usersController.listUsers)`.

// * listUsers
//   * Should retrieve the entire array from _data/index_
const listUsers = (req, res) => {
  res.json(users)
}

// * showUser
//   * Should retrieve just the user that matches the passed-in id
const listUsersById = (req, res) => {
  let foundUser = users.find( user => user.id === req.params.userId)
  res.json(foundUser)
}

// * createUser
//   * Should add a user to the array

// * updateUser
//   * Should update one user in the array based on its id

// * deleteUser
//   * Should delete one user from the array based on its id

module.exports = {
  listUsers,
  listUsersById
}
