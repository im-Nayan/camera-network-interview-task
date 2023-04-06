const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const mainSchema = new Schema({
    name: { type: String, require: true },
    descriptions: { type: String, require: true },
    cameras: { type: Schema.Types.ObjectId,ref:"camera", require: true },
})


const mainModel = mongoose.model('cameraNetwork', mainSchema);


// EXPORTS SECTION
module.exports = mainModel;