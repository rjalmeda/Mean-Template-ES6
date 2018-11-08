const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sampleDB');

require('./../models/sampleSchema');