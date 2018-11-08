const mongoose = require('mongoose');
const SampleSchema = mongoose.model('sample');

class SampleController{
    constructor(){
        this.cache = {};
    }

    async getName(req,res){
        let names = await SampleSchema.find({});
        console.log(names);
        if (names) console.log("false");
        let name = names.length ? names[Math.floor(Math.random()*(names.length-1))].username : "none";
        res.json({name})
    }

    async postName(req,res){
        console.log(req.body);
        await (new SampleSchema(req.body)).save();
        res.status(200).json();
    }
}

module.exports = new SampleController();