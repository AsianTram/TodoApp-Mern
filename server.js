const express= require('express');
const app =express();
const mongoConnect = require('./config/mongoConnect');
const path= require('path');


const PORT = process.env.PORT || 5000;

//Connect Db
mongoConnect();

//Body parser
app.use(express.json({extended: false}));

// app.get('/', (req, res) => res.send('Hello World!'));

//Define Routes
app.use('/api/user', require('./routes/api/user'));
app.use('/api/todo', require('./routes/api/todo'));


// Serve static asset in production
if(process.env.NODE_ENV==='production'){
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'client', 'build','index.html'));
    })
}

//Listen to port
app.listen(PORT, ()=> console.log(`Listening to ${PORT}...`));