const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const mainSchema = new Schema({
    name: { type: String, require: true },
    description: { type: String, require: true },
    url: { type: String, require: true },
    // phone:{type:String,require:true,},
    // password:{type:String,require:true,}
})


const mainModel = mongoose.model('camera', mainSchema);


// EXPORTS SECTION
module.exports = mainModel;