const express= require('express');
const app =express();
const mongoConnect = require('./config/mongoConnect');
const path= require('path');


const PORT = process.env.PORT || 5000;

//Connect Db
mongoConnect();

//Body parser
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('Hello World!'));

//Define Routes
app.use('/api/user', require('./routes/api/user'));
app.use('/api/todo', require('./routes/api/todo'));

//Adds the react production build to serve react requests
app.use(express.static(path.join(__dirname, "client/build")));
//React root
app.get("*", (req, res) => {
res.sendFile(path.join(__dirname + "client/build/index.html"));
});

//Listen to port
app.listen(PORT, ()=> console.log(`Listening to ${PORT}...`));