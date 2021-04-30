import { codeProtoType } from "./codeProto";

const arrToString = (arr: number[]): string => {
    let ret = "";
    for (const n of arr)
        ret += n.toString() + "\n";

    return ret;
}

const nodeInputHeader = (input: number[], solutionClone: codeProtoType): codeProtoType => {
    solutionClone.files[0].content = `let _iarr=${JSON.stringify(input)}.reverse();function getInput(){return _iarr.pop();}; ${solutionClone.files[0].content}`;

    return solutionClone;
}

const stdinInputHeader = (input: number[], solutionClone: codeProtoType): codeProtoType => {
    // convert array to string delimited by line breaks
    solutionClone.stdin = arrToString(input);

    return solutionClone;
}

const langHandler = new Map([
    ["js", nodeInputHeader],
    ["python", stdinInputHeader]
]); 

const addInputHeader = (lang: string, input: number[], formattedSolution: codeProtoType) => {
    const dupeSolution: codeProtoType = JSON.parse(JSON.stringify(formattedSolution)) // utter fucking garbage

    // @ts-ignore
    return langHandler.get(lang)(input, dupeSolution);
}

export default addInputHeader;