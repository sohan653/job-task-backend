const express=require ('express')
const cors=require('cors')
const mongoose=require("mongoose");
// const router = require('./routes/user');
const app=express();
app.use(cors());
app.use(express.json());
const {readdirSync} =require('fs');
const { signup, login } = require('./controllers/user');


// readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`)));


app.post('/signup',signup);
app.post('/login',login)

app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
});
const port=4000;
const URL='mongodb+srv://sohanur653:xEOCeD8sKE6bbwHT@cluster0.gmtdmww.mongodb.net/taskjob?retryWrites=true&w=majority'
mongoose.connect(URL)
.then(()=>{
    console.log('Connected to database')
    app.listen(port,()=>{
        console.log(`Server listening on ${port}`)
    })
})