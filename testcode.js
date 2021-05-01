let N = getInput();
let maxelem = 0;
for (let i=0;i<N;i++){
    maxelem = Math.max(maxelem, getInput());
}

console.log(maxelem);