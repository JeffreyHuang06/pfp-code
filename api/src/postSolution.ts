import axios from 'axios';
import { codeProtoType } from './codeProto';

const postSolution = (solutionUpload: codeProtoType) => {
    return axios.post(
        "https://emkc.org/api/v2/piston/execute",
        JSON.stringify(solutionUpload),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then(res => {
        return res;
    })
    .catch(e => {
        if (e.response){
            return e.response;
        }
    });
}

export default postSolution;