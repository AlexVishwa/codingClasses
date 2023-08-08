const mongoose= require('mongoose')
const express= require('express')
const config= require('config')
const mongodb = config.get('mongoURI');

const connection = async () => {
    try{
        await mongoose.connect(mongodb ,
            {} );
            console.log("Connected to MongoDB");
    }  catch (err) {
        console.error(err);
        process.exit(1);
    }    
};

module.exports=connection