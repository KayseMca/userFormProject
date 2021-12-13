
const fs = require('fs')


// read all users
 let load_user =()=>{
     try {
         let user_data = JSON.parse(fs.readFileSync(__dirname +"/userData.json",'utf-8'));
         return user_data
         
     } catch (error) {
         return new Error(error)
     }
};


 let getUser =(id) =>{
    let all_users = load_user()
    let  find = all_users.find(user=>user.id===id)
    if(find) return find
    return false
};



let saveUserDat = (data)=>{
    let users = load_user()
    users = JSON.parse(JSON.stringify(users))

    if(isEmptyObject(users)){
        console.log("her")
        users.push(data)
    }else{
        console.log("here 2")
        users = [data]
    }

    users = JSON.stringify(users)

    //saving data to JSON file
    fs.writeFileSync(__dirname+'/userData.json', users,"UTF-8",(err)=>{
        if(err) {
            console.log(err)
            throw err
        };
    })
};



function isEmptyObject(obj) {
    return Object.keys(obj).length;
  }

module.exports = {
    load_user,
    getUser,
    saveUserDat,
    isEmptyObject
}
