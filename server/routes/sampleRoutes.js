module.exports = (app)=>{
    app.get('/getName', (req,res)=>{
        res.send("name!");
    })
}