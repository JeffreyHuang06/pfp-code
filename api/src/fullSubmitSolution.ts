import problems from "../problems/problems"
import {testCase as testCaseType} from '../problems/problemType'
import postSolution from "./postSolution";

const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const fullSubmitSolution = async (problemName: string, formattedSolution: any): Promise<boolean[] | null> => {
    const result: boolean[] = [];
    const problem: testCaseType[] = problems.get(problemName) || [];

    console.log(problem);

    // iterate through all test cases
    for (const testCase of problem){
        console.log(new Date());
        formattedSolution.stdin = testCase.input + "\n";

        // get piston response
        const pistonRes = await postSolution(formattedSolution);

        console.log(pistonRes.data);

        // check its status code
        if (pistonRes.status !== 200) return null;

        const pistonOut = pistonRes.data.run.stdout;
        const expectedOut = testCase.output + '\n';

        result.push((pistonOut === expectedOut));

        // timeout
        await sleep(1000);
        console.log("here");
    }

    console.log("done", result);

    return result;
}

export default fullSubmitSolution;