var mongoose = require('mongoose');

var Schema = mongoose.Schema({
    firstName : {
        required : true,
        type     : String
    },
    lastName : {
        required : true,
        type    : String
    },
    userName : {
        required : false,
        type    : String
    },
    email: {
        type: String,
        required : true,
        unique : true
      },

    mobile : {
        required : true,
        type    : Number,
        length :10
    },
    
    created_at : {
        type : Date,
        default : Date.now
    }
});
Schema.path('email').validate(async (email) =>{
  const emailCount = await mongoose.models.list.countDocuments({ email })
  return !emailCount
},'Email already exists');
  
var user_Signup = module.exports = mongoose.model('list',Schema);
module.exports.get = function(callback, limit) {
    user_Signup.find(callback).limit(limit);
};