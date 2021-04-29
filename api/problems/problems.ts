import { testCase } from "types/problemType"

let problems: Map<string, testCase[]> = new Map();

// change this file to json

problems.set("Test", [
    {
        input: [5,40,40,35,54,59],
        output: "59"
    }
    ,{
        input: [3,3,3,54],
        output: "54"
    }
])

export default problems;