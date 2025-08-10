const express = require('express');
const mongoose = require('mongoose'); //through this we can connect to database
const bodyParser = require('body-parser');

const app=express();


//impost routes
const postRoutes = require('./routes/posts'); //import routes

//app middleware
app.use(bodyParser.json());


//route middleware
app.use( postRoutes);



const PORT=8000;
const DB_URL = 'mongodb+srv://twg:twg123@mernapp.9qcekqg.mongodb.net/mernCrud?retryWrites=true&w=majority&appName=mernApp'  //mongodb+srv://<username>:<password>@<cluster-url>?retryWrites=true&w=majority&appName=mernApp

//connect to database
mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB connected')
})
.catch((err)=>{
    console.log(`Db error`,err);
})


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});