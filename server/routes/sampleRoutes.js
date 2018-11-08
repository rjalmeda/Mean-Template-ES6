const SampleController = require('./../controllers/sampleController');

module.exports = (app)=>{
    app.get('/name', (req,res)=>{
        SampleController.getName(req,res);
    })
    app.post('/name', (req,res)=>{
        SampleController.postName(req,res);
    })
}