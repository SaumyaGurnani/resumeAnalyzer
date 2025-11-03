const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://saumyagurnani73_db_user:4RORqvVAXrjpZ6kL@clusterra.f3kkkw5.mongodb.net/?appName=ClusterRA').then((res)=>
  {
      console.log("Database Connected Successfully")
        }).catch(err=>{
    console.log("Something Error,", err)
})


