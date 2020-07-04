const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express()


app.use('/graphql',graphqlHTTP({
    graphiql: true
}))

app.listen(4000, () => { //localhost:4000
    console.log('Listening for request on my graphql project port 4000');
    
});