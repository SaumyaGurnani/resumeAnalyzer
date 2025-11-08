const express=require('express');
const cors=require('cors');
const app=express();
const PORT = process.env.PORT || 4000;

const path=require('path')
require('./conn');
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ["https://resume-analyzer-48bz.vercel.app/", "http://localhost:5173"]
}))

const UserRoutes=require('./Routes/user');
const ResumeRoutes=require('./Routes/resume')
app.use('/api/user', UserRoutes)
app.use('/api/resume', ResumeRoutes)

app.use(express.static(path.join(__dirname, "build")));
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"))
})
app.listen(PORT, ()=>{
    console.log("backend is running on port", PORT)
})