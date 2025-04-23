const mongoose = require('mongoose')

function connectToDatabase() {
   mongoose.connect(process.env.LOCAL_MONGO_URI)
      .then(() => {
         console.log('Connected to database')
      })
      .catch(err => console.log(err))
}

module.exports = connectToDatabase