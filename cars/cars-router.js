const express = require("express")
const knex = require("knex")
const db = require("../data/config")

const router = express.Router();

router.get("/cars", async(res,req,next)=>{
  try{
res.json(await db( "cars"))
  } catch{

  }

})