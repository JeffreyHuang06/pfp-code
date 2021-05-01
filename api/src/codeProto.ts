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