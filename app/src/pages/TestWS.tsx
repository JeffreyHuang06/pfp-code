import React from 'react'
const WebSocket = require("isomorphic-ws");

const startWS = () => {
    const ws = new WebSocket('ws://localhost:8080/wscode');

    ws.onopen = function open() {
        
    }

    ws.onclose = function close() {
        console.log('disconnected');
    };

    ws.onmessage = function incoming(data: any) {
        
    };
}

const TestWS = () => {
    return (
        <div>
            <button onClick={startWS}>Here</button>
        </div>
    )
}

export default TestWS;