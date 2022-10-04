const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  name: {
      type:String,
      trim:true,
      required:'Name is required'
    },
    email: {
        type:String,
        trim:true,
        required:'Name is required',
        unique:true
      },
      password: {
        type:String,
        required:'Name is required',
        min:6,
        max:64
      },
      isAdmin : {type: Boolean ,  default: false},
 
},
{timestamps:true});



// userSchema.pre("save", function(next){
//     let user=this;
//     if(user.isModified("password")){
//         return bcrypt.hash(user.password,12,function (err,hash){
//             if(err){
//                 console.log("BCRYPT HASH ERR",err);
//             }
//             user.password = hash;
//             return next();
//         });
//     }
//     else{
//         return next();
//     }
// })

// userSchema.methods.comparePassword = function(password,next){
//     bcrypt.compare(password,this.password,function(err,match){
//         if(err){
//             console.log("COMPARE PASSWORD ERR",err);
//             return next(err,false);
//         }
//         console.log("MATCH PASSWORD",match);
//         return next(null,match); //true
//     }
//     );
// };

module.exports = mongoose.model('users' , userSchema)