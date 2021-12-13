const express = require('express');
const fs = require('fs')
const { dirname } = require('path');

const {load_user, saveUserDat, getUser, isEmptyObject} = require('../model/user-model')
const router = express.Router()




router.post('/',(req,res)=>{
    let users = load_user()
    let id;
    id = isEmptyObject(users) ? users.length+1:1
    const date = new Date();

    let data = req.body;

    data['id'] = id
    data['create_at'] = date
    // save data
    saveUserDat(data)
    res.status(201).send(data)
})


router.get('/all',(req,res)=>{
    res.status(200).send(load_user())
})

router.get('/:id',(req,res)=>{
    let id = parseInt(req.params.id, 10);
    let user = getUser(id)
    res.status(200).send(user)
})


router.delete('/:id',(req,res)=>{
    let users = load_user()
    let updated;
    let id = parseInt(req.params.id, 10)
    let index = users.findIndex(function (user) {
        return user.id === id;
    });
    
    const appDir = dirname(require.main.filename);
    if (index !== -1) {
        let removed = users.splice(index,1);
        console.log(removed)
        console.log("dhex")
        updated = users
        console.log(updated)
        console.log(users.length)
         if(users.length ===0) {
             console.log("here")
            fs.writeFileSync(appDir+'/api/model/userData.json', '[]',"UTF-8")
            res.status(200).send({message:`deleted user at ${index}`})

         }else{
             console.log("again update")
             updated = JSON.stringify(updated)
             fs.writeFileSync(appDir+'/api/model/userData.json', updated,"UTF-8")
         }
         
        }else{

            res.status(401).send({message:'Could find a User'}) 
        }
})


module.exports = router;