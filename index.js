const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/login', (req,res) =>{
    console.log(req.body)

    let result =login(
        req.body.username,
        req.body.password
    )
    
    res.send('login')
})

app.get('/', (req, res) => {
  res.send('DRAGON IS COMING!')
})

app.get('/bruh', (req, res) => {
    res.send('GOODBYE')
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

//try to login
//login("sufi","1234")
console.log(login("sufi","1234"))
//login("sufi","password")

register("sarah","0000","sarahjeman","sarahhhh00@gmail.com")
console.log(login("sarah","0000"))