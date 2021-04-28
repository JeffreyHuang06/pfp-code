import { judgingStatusCode as jSC } from "types/judgingEnum";
import problems from "../problems/problems"
import {testCase as testCaseType} from 'types/problemType'
import postSolution from "./postSolution";

const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// TODO: add the formatted solution type
async function* fullSubmitSolution (problemName: string, formattedSolution: any): AsyncGenerator<jSC> {
    const problem: testCaseType[] = problems.get(problemName) || [];

    console.log(problem);

    // iterate through all test cases
    for (const testCase of problem){
        // console.log(new Date()); <= for debugging
        formattedSolution.stdin = testCase.input + "\n";

        // get piston response
        const pistonRes = await postSolution(formattedSolution);

        console.log(pistonRes.data);

        // check its status code
        if (pistonRes.status !== 200) return jSC.PISTONERR;

        const pistonOut = pistonRes.data.run.stdout;
        const expectedOut = testCase.output + '\n';

        yield (pistonOut === expectedOut) ? jSC.SUCCESS : jSC.FAILED;

        // timeout
        await sleep(1000);
    }
}

export default fullSubmitSolution;