import 'module-alias/register';

import express from 'express';
const enableWs = require('express-ws');

import testAPIRouter from "routes/test"
import codeAPIRouter from "routes/code"
import cors from "cors"

const app = express();
enableWs(app);
const port = 80;

app.use(express.urlencoded({extended: true}));
app.use(cors())

app.use("/", testAPIRouter);
app.use("/", codeAPIRouter);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});