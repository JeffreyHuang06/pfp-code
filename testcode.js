let _inputarr = [5,40,40,35,54,59];
_inputarr.reverse();

const getInput = () => {
    return _inputarr.pop();
}

let N = getInput();
let maxelem = 0;
for (let i=0;i<N;i++){
    maxelem = Math.max(maxelem, getInput());
}

console.log(maxelem);