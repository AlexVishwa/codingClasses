const express= require('express')
const Mobile= require('../models/mobile.js')
//const Mobile=require('../models/mobile.js')
const router= express.Router();
router.get('/api/createMobile',async (req,res)=>{
	req.header('Content-Type:application/json');
	//console.log(req.body);
	
	try{
	//req.header('Content-Type:application/json');
	//const { itemname, itemprice, itemavatar, itemreviews} = req.body;
	const newMobile= new Mobile({
		name: req.body.name,
		modelname: req.body.model,
		description: req.body.description
	});
	await newMobile.save().then(()=> console.log("New mobile is saved"));
	//console.log(item);
	res.json(newMobile);
	//res.status(200).send();
	}
	catch(err){
	console.log(err);
    res.status(500).send('Server Error');
	}
	
});
