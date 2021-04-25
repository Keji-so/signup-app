const express = require('express')
const router = express.Router() //import router from express
const signUpTemplateCopy = require('../tables/SignUpTables') // import table created with mongoose, this is needed to collect the info submitted
const bcrypt = require('bcrypt') //used to hide password


router.post('/signup', async (req, res) => {  //path for post request from form (async is used here cos we have to wait for the password to be encrypted first before sending)

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)

    const signedUpUser = new signUpTemplateCopy({
        fullName: req.body.fullName, //grab fullname from body of the request
        userName: req.body.userName,
        email: req.body.email,
        password: securePassword
    })
    signedUpUser.save() // save the data collected
      .then(data => {
          res.json(data) //convert data collected to json
      })
      .catch(error => {
          res.json(error) //send error as json file if theres error
      })
})


module.exports = router // export router