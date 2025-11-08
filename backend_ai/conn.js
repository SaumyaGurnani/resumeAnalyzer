const mongoose=require('mongoose');
const connectionString=process.env.DATABASE_URL;
mongoose.connect(connectionString).then((res)=>
  {
      console.log("Database Connected Successfully")
        }).catch(err=>{
    console.log("Something Error,", err)
})


