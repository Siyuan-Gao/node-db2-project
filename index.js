const express = require("express");
const carsRouter = require("./cars/cars-router");

const server = express()
const port = process.env.PORT || 5000

server.use(carsRouter);

server.use((err,req,res,next)=>{
  console.log(err)
  res.status(500).json({
    message: "Oops! Something's wrong..."
  })
})

server.listen(port,()=>{
  console.log(`Server Running at: ${port}`)
})