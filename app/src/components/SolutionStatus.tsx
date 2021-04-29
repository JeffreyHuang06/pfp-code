import {useRecoilValue} from "recoil";
import statusAtom from "state/statusAtom"

import SuccessSVG from "images/success.svg"
import FailSVG from "images/fail.svg"
import ErrSVG from "images/err.svg"

const getSolBlock = (returnString: string): JSX.Element => {
    switch(returnString){
        case "SUCCESS":
            return (
                <td>
                    <img className="mr-3" src={SuccessSVG} alt="success" style={{width: "5em"}}/>
                </td>
            );
        
        case "FAILED":
            return (
                <td>
                    <img className="mr-3" src={FailSVG} alt="fail" style={{width: "5em"}}/>
                </td>
            );

        case "PISTONERR":
            return (
                <td>
                    <img className="mr-3" src={ErrSVG} alt="fail" style={{width: "5em"}}/>
                </td>
            );
        
        case "SOLERR":
            return (
                <td>
                    <img className="mr-3" src={ErrSVG} alt="fail" style={{width: "5em"}}/>
                </td>
            );

        default:
            return <></>;
    }
}

const SolutionStatus = () => {
    const status = useRecoilValue(statusAtom);

    return (
        <ul className="border border-secondary rounded container mt-3 py-3">
            {
                status.map(returnString => getSolBlock(returnString))
            }
        </ul>
    )
}

export default SolutionStatus;