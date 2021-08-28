import {User} from "../models/userModel"

module.exports = {
    userData:function(localUser=User) {
        id= localUser.user_id;
        name= localUser.name;
        email= localUser.email;
        profile= localUser.profile;    
}
}