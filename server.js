const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
    '21 Savage': {
        'age': 28,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'Chance The Rapper': {
        'age': 27,
        'birthName': 'Chancellor Jonathan Bennett', 
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 28,
        'birthName': 'dylan', 
        'birthLocation': 'dylan'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/rappers/:rapperName', (request, response)=> {
    const rapName = request.params.rapperName
    console.log(rapName)
    if (rappers[rapName]) {
        response.json(rappers[rapName])
    } else {
        response.json(rappers['dylan'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})