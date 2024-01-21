const express = require("express");
const app = express();
const cors = require("cors")


app.use(cors());
app.use(express.json());
PORT = 3000;







app.get('/', (req, res) => {
    console.log('here');
    res.send('jo');
})

app.get('/api/contact', (req, res) => {
    console.log('here')
    // res.send('jo');
    // res.statusCode(200).send('contact created');
})
app.listen(3000, () => {
    console.log('server started', PORT)
});