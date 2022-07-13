const express = require('express')
const app = express()
const PORT = 8000

const brawlers = 

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const brawlStars = request.params.name.toLocaleLowerCase()
    if (brawlers[brawlStars]){
        response.json(brawlers[brawlStars])
    }
})

app.listen(PORT , ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

