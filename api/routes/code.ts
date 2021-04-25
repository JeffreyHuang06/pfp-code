import express from 'express';

import postSolution from "../src/postSolution.js"
import {formatSolution, validateCodeInput} from "../src/formatSolution.js"

const router = express.Router();

router.post("/code", async (req: any, res: any) => {
    // validate input
    if (!validateCodeInput(req.body)){
        res.statusCode = 400;
        res.end();
    }

    // submit to piston
    const formattedSolution = formatSolution(req.body);
    const pistonRes = await postSolution(formattedSolution);

    // validate piston result
    if (pistonRes.status === 200){
        res.send(pistonRes.data);
    } else {
        res.statusCode = pistonRes.status;
        res.end();
    }
});

export default router;