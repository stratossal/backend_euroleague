import {Schema, model,Document} from "mongoose"

export interface IUser extends Document{
  firstname:string,
  lastname:string,
  email:string,
  country:string,
  address?: {
    area?:string,
    street:string,
    number?:string,
    po?:string,
    municipality?:string
  },
  phone?:string,
  favTeam?:string,
  password:string,
  roles: Schema.Types.ObjectId
}

const UserSchema = new Schema<IUser>({
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
  password: {type:String, required:true},
  roles: [{type : Schema.Types.ObjectId, ref: "Role", required: true}]
},{
  collection: "users",
  timestamps: true
})

export default model("User", UserSchema)