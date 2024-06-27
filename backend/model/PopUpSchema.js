const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const PopUpSchema = new mongoose.Schema({
    PopupId: { type: String, required: true , unique: true, },
    PopupTitle: { type: String, required: true },
    PopupLink: { type: String, required: true },
    PopupImage: { type: [String] },
    PopupPublish: { type: Boolean, default: false },
    Popupdelay:{type:Number, default:0}
})


const PopUp = mongoose.model('PopUp', PopUpSchema);
module.exports = PopUp;