const express = require('express');
const app = express();
const port = 80;

const testAPIRouter = require("./routes/test.js");
const codeAPIRouter = require("./routes/code.js");

app.use(express.urlencoded({extended: true}));

app.use("/", testAPIRouter);
app.use("/", codeAPIRouter);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});