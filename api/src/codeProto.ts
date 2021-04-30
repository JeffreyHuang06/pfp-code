interface File {
    content: string;
}

export interface codeProtoType {
    language: string;
    version: string;
    files: [File];
    stdin: string;
    run_timeout: number;
}

export const codeProto: codeProtoType = {
    "language": "",
    "version": "",
    "files": [
        {
            "content": ""
        }
    ],
    "stdin": "",
    "run_timeout": 1000
};

export const langVers: Map<string, string> = new Map([
    ["js", "15.10.0"],
    ["python", "3.9.4"]
]);
