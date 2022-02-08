var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});

const Image = mongoose.model('Image', imageSchema)

export {
    Image,
    imageSchema
}