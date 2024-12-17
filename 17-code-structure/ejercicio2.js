
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
     return fib.slice(0, n +1);


}


        function getFibonnacciSequence(req, res) {
            const n= parseInt(req.params.numer, 10);

            if(isNan(n) || n < 0){
                return res.status(400).send('numero invalido');
            }
            const sequence = fibonacci(n);
            res.json(sequence);
        
        
        
        } 

        module.exports = {getFibonnacciSequence};