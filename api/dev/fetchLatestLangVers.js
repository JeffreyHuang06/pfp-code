const axios = require("axios");
const fs = require("fs");

(async () => {
    const {data} = await axios.get("https://emkc.org/api/v2/piston/runtimes");

    // format it into typescript
    let mapped = "const langVers: Map<string, string> = new Map([\n";

    for (const entry of data){
        mapped += `\t["${entry.language}", "${entry.version}"], \n`
    }

    mapped += "]);\n"
    mapped += "export default langVers;"

    // write into file
    fs.writeFile("../src/langVers.ts", mapped, (err) => {
        if (err) throw err;

        console.log("Saved");
    });
})();