import { Schema,model } from "mongoose";
const menuItemSchema= new Schema({
    name:{type: String , required :true},
    price:{type: Number , required :true},
    taste:{ type: String, enum:['sweet','spicy','sour'],required :true},
    is_drink:{ type: Boolean, default: false},
    ingredients:{type:[String],default:[]},
    num_sale:{ type: Number, default:0},
})
export const MenuItem= model('MenuItem',menuItemSchema)