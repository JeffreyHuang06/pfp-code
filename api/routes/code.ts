import express from 'express';

import {formatSolution, validateCodeInput} from "src/formatSolution"
import problems from '../problems/problems'
import fullSubmitSolution from 'src/fullSubmitSolution';

const router = express.Router();

router.post("/code", async (req: any, res: any) => {
    // validate input
    if (!validateCodeInput(req.body) || !problems.has(req.body.prob)){
        res.statusCode = 400;
        res.end();
    }

    // submit to piston
    const formattedSolution = formatSolution(req.body);
    const submitResponse = await fullSubmitSolution(req.body.prob, formattedSolution);

    console.log("submit response:", submitResponse);

    if (submitResponse === null){
        res.statusCode = 400;
        console.log("Piston Err");
        res.end();
        return;
    }

    res.send(JSON.stringify(submitResponse));
});

export default router;