const mongoose = require('mongoose');
const sampleSchema = mongoose.Schema({
    username : {
        type : String,
        require : true
    }
})

mongoose.model('sample', sampleSchema);
