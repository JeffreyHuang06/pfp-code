const express = require('express');
const app = express();
const port = 80;

import testAPIRouter from "./routes/test"
import codeAPIRouter from "./routes/code"

app.use(express.urlencoded({extended: true}));

app.use("/", testAPIRouter);
app.use("/", codeAPIRouter);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});