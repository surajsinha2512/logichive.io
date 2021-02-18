const express = require("express");
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv = require("dotenv");
const app=express();
const port = process.env.PORT || 9999;
dotenv.config();
app.use(cors());
app.use(express.json());

// MongoDb 
let conn;
const connectDB = async () => {
  try {
     conn = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};
connectDB();

//define Schema and model


const detailSchema=new mongoose.Schema({
  img:String,
  title:String,
  description:String
})

const detailModel=mongoose.model("detail",detailSchema);


// EndPoint

const checkCondition=(title)=>{
  if(title!==null || title!==undefined)
  return true
}

app.post('./add',async (req,res)=>{
    
    const {image,title,description} = req.body;
    console.log(image,title,description);
    if(checkCondition(title)){
      const newServices=new detailModel({img:image,title:title,description:description});
      newServices.save();
      res.status(200).send("success");
    }
    
    else{
      res.status(400).send("can't Update")
    }
})

app.get('/',async(req,res)=>{
  const getServices=detailModel.find({});
  res.send(getServices);
})



app.listen(
    port,
    console.log(`Server begins in ${port} in ${process.env.MODE}`)
  );


