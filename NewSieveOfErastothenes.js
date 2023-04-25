//New sieve of erastothenes

let n = +prompt("Insert a number");
let isPrime = Array(n + 1).fill(true);


for (let p = 2; p * p <= n; ++p) {

    if (isPrime[p]) {
        for (let i = p * p; i <= n; p += p){
            isPrime[i] = false;
        }
    }
}

for (let p = 2; p <= n; p++){
    if(isPrime[p]){
        console.log(p);
    }
}

    