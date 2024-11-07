const express=require("express")
const app=express()
const cors=require("cors")
// const corsOptions = {
//   origin: 'http://localhost:5173',  // Your frontend URL
//   methods: 'GET, POST, PUT, DELETE',  // Allow specific HTTP methods
//   allowedHeaders: 'Content-Type, Authorization',  // Allow 'Authorization' header
// };

app.use(cors());  // Use the CORS middleware with the options
app.use(express.json())

require("dotenv").config()
require("./conn/conn.js")
const User=require("./routes/user.js")
const Book=require("./routes/book.js")
const Favourite=require("./routes/favourite.js")
const Cart=require("./routes/cart.js")
const Order=require("./routes/order.js")
app.use(cors())

// routes
app.use("/api/v1",User)
app.use("/api/v1",Book)
app.use("/api/v1",Favourite)
app.use("/api/v1",Cart)
app.use("/api/v1",Order)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})