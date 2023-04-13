const express = require('express')
const app = express()
const port = 3000


app.use(express.json())

app.post('/login', (req,res) =>{
    console.log(req.body)

    let result =login(req.body.username,req.body.password)
        
    let token =generateToken(result)
    res.send(token)
})
app.get('/',(req,res)=>{
  res.send("Hello UTeM!")
}
app.get('/bye',verifyToken,(req,res)=>{
    res.send("BYe2 UTeM")
})
   app.post('/register',(req,res)=>{
    let result =register(
      req.body.username,
      req.body.password,
      req.body.name,
      req.body.email
    )
    let token=generateToken(result)
    res.send(result)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let dbUsers=[

  {
      username:"sufi",
      password:"1234",
      name:"sufihamdi",
      email:"ahmadhamdi2111@gmail.com"
  },

  {
      username:"syed",
      password:"11113456",
      name:"syedsem",
      email:"syed234@gmail.com",
  },

  {
      username:"alip",
      password:"1234",
      name:"alipdragon",
      email:"alifjr@gmail.com",
  }
]

function login(reqUsername, reqPassword)
{
let matchUser = dbUsers.find(user => user.username == reqUsername)

//console.log(matchUser)

if(!matchUser) return "User not found"
if(matchUser.password == reqPassword)
{
  return matchUser
}
else
{
  return" invalid"
}

}

function register(reqUsername,reqPassword,reqName,reqEmail)
{

  dbUsers.push({username:reqUsername,
      password : reqPassword,
      name : reqName,
      email:reqEmail})
}
conswt=require('jsonwebtoken');
function generateToken(userdata){
    const token =jwt.sign(
      userdata,
      'karok',
      {expiresIn:60}
    );
    return token
}
 function verifyToken(req,res,next){
  let header=
  req.headers.authorization
  console.log(header)

  let token=header.split('')[1]

  jwt.verify(token,'karok'
  function(err,decoded){
    if(err){
      res.send("Invalid Token")
    }
  req.user =decoded
  next()
 });
 }