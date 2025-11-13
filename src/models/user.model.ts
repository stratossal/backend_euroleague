import {Schema, model} from "mongoose"


const UserSchema = new Schema({
  firstname: {type: String, required:true},
  lastname : {type: String, required:true},
  email: {type: String, required: true, unique:true, index:true},
  country: {type: String, required:true},
  address: {
    area: String,
    street: String,
    number: String,
    po: String,
    municipality: String
  },
  phone: {type: String, required: true},
  favTeam: {type: String, required:true},
  password: {type:String, required:true}
},{
  collection: "users",
  timestamps: true
})

export default model("User", UserSchema)