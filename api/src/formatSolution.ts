import {codeProto, codeProtoType, langVers} from "./codeProto.js"

export const validateCodeInput = (bodyJSON: any) => {
    return (bodyJSON.hasOwnProperty("lang") && bodyJSON.hasOwnProperty("code") && bodyJSON.hasOwnProperty("prob"));
}

export const formatSolution = (bodyJSON: any) => {
    const {lang, code} = bodyJSON;

    const codeUpload: codeProtoType = codeProto;

    codeUpload.language = lang;
    codeUpload.version = langVers.get(lang) || "";
    codeUpload.files[0].content = code;

    return codeUpload;
}