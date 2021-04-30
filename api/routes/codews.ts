import {clientSubmission} from 'types/clientSubmissionType'
import {judgingStatusCode as jSC} from "types/judgingEnum"

import {formatSolution, validateCodeInput} from "src/formatSolution"
import problems from '../problems/problems'
import fullSubmitSolution from 'src/fullSubmitSolution';

export default async function* judgeCode(jsonString: string){
    const req: clientSubmission = JSON.parse(jsonString);

    // validate input
    if (!validateCodeInput(req) || !problems.has(req.prob)){
        yield jSC.SOLERR;
        return;
    }

    // submit to piston
    const formattedSolution = formatSolution(req);
    const pistonRes = fullSubmitSolution(req.prob, formattedSolution, req.lang);

    console.log("submit response:", pistonRes);

    for await (const res of pistonRes){
        yield res;
    }
}