import mongoose from "mongoose";

export default mongoose.model("members", new mongoose.Schema({
    member_id: {type: String, unique: true, required: true},
    name:{type: String, required: false},
    age:{type: Number, required: false},
    b_day: {type:Date},
    balance: {type: Number, default: 0.00},
    level: {type:Number, default:0},
    xp: {type:Number, default:0.00}
}))