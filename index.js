
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000
const app = express();

// Use cors middleware to enable CORS
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello From Battle Toys server!');
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
