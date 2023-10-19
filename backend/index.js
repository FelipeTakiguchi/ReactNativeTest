const express = require('express');
const routes = require('./src/routes');
const cors = require("cors");
const db = require("./src/db/db")

const app = express();

db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to Database"))

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(5000, () => console.log("Server started"))