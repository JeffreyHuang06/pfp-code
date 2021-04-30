import { clientSubmission } from "types/clientSubmissionType.js";
import {codeProto, codeProtoType, langVers} from "./codeProto.js"

// bodyJSON but be any type because possibly malformed user request
export const validateCodeInput = (bodyJSON: any) => {
    return (bodyJSON.hasOwnProperty("lang") && bodyJSON.hasOwnProperty("code") && bodyJSON.hasOwnProperty("prob"));
}

export const formatSolution = (bodyJSON: clientSubmission) => {
    const {lang, code} = bodyJSON;

    const codeUpload: codeProtoType = codeProto;

    codeUpload.language = lang;
    codeUpload.version = langVers.get(lang) || "";
    codeUpload.files[0].content = code;

    return codeUpload;
}