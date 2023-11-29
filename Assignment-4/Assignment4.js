// Generate numbers between any 2 given numbers.

function generateNumbers(start, end){
    let result = '';
    for(let i=start+1; i<=end; i++){
        result += i + ' ';
    }
    console.log(result);
}

const n1 = 10;
const n2 = 25;

generateNumbers(n1,n2);

