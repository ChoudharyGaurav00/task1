const express = require("express");
const dotenv = require("dotenv").config();
const connectDb=require("./config/dbConnection")
// const bodyParser = require('body-parser')
connectDb();
const app = express();
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

// app.use(router);
// const router = require("./routes/contact-routes");

app.use(cors());
app.use(express.json());
app.use("/api/contacts", require("./routes/contact-routes"));
app.use(errorHandler)
PORT = process.env.PORT || 5000;







app.get('/', (req, res) => {
    console.log('Home route');
})


app.listen(3000, () => {
    console.log('server started', PORT)
});