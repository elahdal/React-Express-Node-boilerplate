
const express = require('express')
const app = express()

app.get("/api", (req , res)=> {
    res.json({"users": ["user1","tee","et3","te4"]})

})

app.listen(5000, ()=>console.log("Server started on port 5000 "))