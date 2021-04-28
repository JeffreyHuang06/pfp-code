import 'module-alias/register';

import express from 'express';
import { Server } from "ws"

import testAPIRouter from "routes/test"
import codeAPIRouter from "routes/code"
import cors from "cors"
import judgeCode from 'routes/codews';

import {judgingStatusCode as jSC} from 'types/judgingEnum'

const PORT = 80;

// Express

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use("/", testAPIRouter);
app.use("/", codeAPIRouter);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});

// Websocket

const wss = new Server({ port: 8080, path: "/wscode"});

wss.on('connection', function connection(ws) {
    ws.on('message', async function incoming(message: string) {
        
        const codingJudge = judgeCode(message);

        for await (const res of codingJudge){
            // TODO: add randomized wait time to counter timing exploit

            ws.send(res);

            if (res === jSC.SOLERR) ws.close();
        }
    });
});