var mongoose= require('mongoose');
var Schema= mongoose.Schema;


var UserSchema = new Schema({

  firstname:{
    type:String,
    required:true
  },

  lastname:{
    type:String,
    required:true,
    unique:true
  },

  email:{
    type:String,
    required:true
  },

  city:{
    type:String,
    required:true,
    unique:true
  },

  state:{
      type:String,
      required:true,

    },

    zip:{
    type:String,
    required:true,

  }
})


module.exports = mongoose.model('User',UserSchema)
