
function fibonacci(n){
    let fib =[0,1];
    for(let i = 2; i<= n; i++){
        fib[i]= fib [i-1] + fib[i - 2];
    }
    
    return fib.slice(0,n + 1);


}

    function printFibonacciSequence(n){
        const sequence = fibonacci(n);
        console.log(sequence.join(','));
    }



    const numero = 10;
    printFibonacciSequence(numero);