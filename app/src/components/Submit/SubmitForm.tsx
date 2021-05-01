import React, { useState} from 'react'
import {useSetRecoilState} from "recoil"
import statusAtom from "state/statusAtom"

const WebSocket = require("isomorphic-ws");

const langs: string[] = [
    "--",
    "js",
    "python"
];

const SubmitForm: React.FC = () => {
    const [lang, setLang] = useState<string>("");
    const [solution, setSolution] = useState<string>("");
    const [prob, setProb] = useState<string>("");
    const setStatus = useSetRecoilState(statusAtom);

    const [langL, setLangL] = useState("");
    const [probL, setProbL] = useState("");

    const validateFormInput = (): boolean => {
        if (lang === "--" || lang === "") {
            setLangL(" - Need proper language");
            return false;
        }

        if (prob === "") {
            setProbL(" - Problem must be filled in");
            return false;
        }

        return true;
    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>, type: string) => {
        switch(type){
            case "lang":
                setLang(e.target.value);
            break;

            case "solution":
                setSolution(e.target.value);
            break;

            case "prob":
                setProb(e.target.value);
            break;
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateFormInput()) return;

        // reset the state
        setStatus([]);

        const ws = new WebSocket('ws://localhost:8080/wscode');
        ws.onopen = function open() {
            ws.send(JSON.stringify({
                "lang": lang,
                "code": solution,
                "prob": prob
            }));
        }

        ws.onclose = function close() {
            console.log('disconnected');
        };

        ws.onmessage = function incoming(res: any) {
            console.log(res.data); // for debugging
            
            setStatus(prevStatus => [...prevStatus, res.data]);
        };
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} autoComplete="off">

                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="langInput">Language {langL}</label>
                            <select className="form-control" id="langInput" onChange={e => {handleChange(e, "lang")}} value={lang}>
                            {
                                langs.map(language => (
                                    <option>{language}</option>
                                ))
                            }
                            </select>
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="probInput">Problem Name {probL}</label>
                            <input className="form-control" id="probInput" onChange={e => {handleChange(e, "prob")}} value={prob} />
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="submitInput">Submit Solution</label>
                            <input className="form-control btn btn-primary" type="submit" id="submitInput" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="solInput">Solution</label>
                            <textarea className="form-control" id="solInput" onChange={e => {handleChange(e, "solution")}} value={solution}/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SubmitForm;