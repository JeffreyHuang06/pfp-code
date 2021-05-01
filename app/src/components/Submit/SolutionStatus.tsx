import {useRecoilValue} from "recoil";
import statusAtom from "state/statusAtom"

import SuccessSVG from "images/success.svg"
import FailSVG from "images/fail.svg"
import ErrSVG from "images/err.svg"

const getSolBlock = (returnString: string): JSX.Element => {
    switch(returnString){
        case "SUCCESS":
            return (
                <img className="mr-3" src={SuccessSVG} alt="success" style={{width: "5em"}}/>
            );
        
        case "FAILED":
            return (
                <img className="mr-3" src={FailSVG} alt="fail" style={{width: "5em"}}/>
            );

        case "PISTONERR":
            return (
                <img className="mr-3" src={ErrSVG} alt="fail" style={{width: "5em"}}/>
            );
        
        case "SOLERR":
            return (
                <img className="mr-3" src={ErrSVG} alt="fail" style={{width: "5em"}}/>
            );

        default:
            return <></>;
    }
}

const SolutionStatus = () => {
    const status = useRecoilValue(statusAtom);

    return (
        <div className="border border-secondary rounded container mt-3 py-3">
            {
                status.map(returnString => getSolBlock(returnString))
            }
        </div>
    )
}

export default SolutionStatus;