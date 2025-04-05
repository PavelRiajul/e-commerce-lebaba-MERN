const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()

//middleware
app.use(express.json());
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true 
}))
//routes
const userRoutes = require('./src/users/user.route')
const productsRoutes = require('./src/products/product.route')
const reviewsRoutes = require('./src/reviews/review.route')
app.use('/api/auth',userRoutes)
app.use('/api/products',productsRoutes)
app.use('/api/reviews',reviewsRoutes)
async function main() {
    await mongoose.connect(process.env.UB_URL);
    app.get('/', (req, res) => {
      res.send('Lebaba E-commerce Server is running!')
    })
    }
    main().then(()=> console.log('Mongodb connected successfully!')).catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})