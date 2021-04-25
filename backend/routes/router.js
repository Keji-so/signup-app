const express = require('express')
const router = express.Router() //import router from express
const signUpTemplateCopy = require('../tables/SignUpTables') // import table created with mongoose, this is needed to collect the info submitted


router.post('/signup', (req, res) => {  //path for post request from form
    const signedUpUser = new signUpTemplateCopy({
        fullName: req.body.fullName, //grab fullname from body of the request
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
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