const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000
const app = express();

// Use cors middleware to enable CORS
app.use(cors());
app.use(express.json()); // Middleware to parse JSON request body
// for environment variable
require('dotenv').config()




const uri = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_PASS}@cluster0.bpciahf.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        console.log('mongo Connected Successfully')
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('Hello From Battle Toys server!');
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
