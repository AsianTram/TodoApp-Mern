const mongoose=require('mongoose');
const config= require('config');

const mongoConnect=async()=>{
try {
    await mongoose.connect(config.get('mongoUri'),{ useNewUrlParser: true, useCreateIndex:true});
    console.log('Connected to MongoDB...');

} catch (error) {
    console.log(error);
    process.exit(1);
}
}

module.exports=mongoConnect;