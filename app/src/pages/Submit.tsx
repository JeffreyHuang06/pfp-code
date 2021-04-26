import React, {useState} from 'react'
import axios from "axios"
import qs from 'qs'

const langs: string[] = [
    "--",
    "js",
    "python3"
];

const Submit: React.FC = () => {
    const [lang, setLang] = useState<string>("");
    const [solution, setSolution] = useState<string>("");
    const [prob, setProb] = useState<string>("");

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await axios.post(
            "http://localhost:80/code",
            qs.stringify({
                "lang": lang,
                "code": solution,
                "prob": prob
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            }
        );

        console.log(res);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>

                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="langInput">Language</label>
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
                            <label htmlFor="probInput">Problem Name</label>
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

export default Submit;