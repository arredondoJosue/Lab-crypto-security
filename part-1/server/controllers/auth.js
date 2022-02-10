const users = []
const bcrypt = require('bcryptjs')

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body

      
      for (let i = 0; i < users.length; i++) {
        const existingPassword = bcrypt.compareSync(password, users[i].pHash)

        if (users[i].username === username && existingPassword) {
          const copyUserObj = {...users[i]}
          delete copyUserObj.pHash
          res.status(200).send(users[i])
          return
        }
      }
      res.status(400).send("User not found.")
    },

    register: (req, res) => {
        console.log('Registering User')
        // console.log(req.body)
        
        
        const {username, email, firstName, lastName, password} = req.body


        
        let salt = bcrypt.genSaltSync(5)
        const pHash = bcrypt.hashSync(password, salt)
        
        
        const newUser = {
          username,
          email,
          firstName,
          lastName,
          pHash 
        }
        
        
        console.log(newUser);
        users.push(newUser)
        res.status(200).send(newUser)
    } 
}