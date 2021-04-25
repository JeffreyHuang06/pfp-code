import {codeProto, langVers} from "./codeProto.js"

export const validateCodeInput = (bodyJSON: any) => {
    return (bodyJSON.hasOwnProperty("lang") && bodyJSON.hasOwnProperty("code"));
}

export const formatSolution = (bodyJSON: any) => {
    const {lang, code} = bodyJSON;

    const codeUpload = codeProto;

    codeUpload.language = lang;
    codeUpload.version = langVers.get(lang);
    codeUpload.files[0].content = code;

    // TEMPORARY
    codeUpload.stdin = "1\n";

    return codeUpload;
}