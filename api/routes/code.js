const express = require('express');
const router = express.Router();
const axios = require('axios');

const codeProto = {
    "language": null,
    "version": null,
    "files": [
        {
            "content": null
        }
    ],
    "stdin": null,
    "run_timeout": 1000
};

const langVers = {
    "js": "15.10.0"
};

const submitCode = (lang, code) => {
    let codeUpload = codeProto;

    codeUpload.language = lang;
    codeUpload.version = langVers[lang];
    codeUpload.files[0].content = code;

    // TEMPORARY
    codeUpload.stdin = "1\n";

    return axios.post(
        "https://emkc.org/api/v2/piston/execute",
        JSON.stringify(codeUpload),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then(res => {
        return {
            status: 200,
            ...res
        }
    })
    .catch(e => {
        if (e.response){
            return e.response;
        }
    });
}

const validateCodeInput = bodyJSON => {
    return (bodyJSON.hasOwnProperty("lang") && bodyJSON.hasOwnProperty("code"));
}

router.post("/code", async (req, res) => {
    // validate input
    if (!validateCodeInput(req.body)){
        res.sendStatus(400).send("Invalid form input");
    }

    // submit to piston
    const {lang, code} = req.body;
    const pistonRes = await submitCode(lang, code);

    // validate piston result
    if (pistonRes.status === 200){
        res.send(pistonRes.data);
    } else {
        res.sendStatus(pistonRes.status).send(`Error: request responded with error code ${pistonRes.status}`);
    }
});

module.exports = router;