const factorial = (x) => {
    if( x == 1){
        return 1;
    }
    return x * factorial(x -1);
}

factorial(5);


const pow = (x, n) => {
    if(n == 1){
        return x;
    }

    return x * pow(x, n-1);
}

pow(2, 3);

//Add a given number down to 1;
const sum = (x) => {
    if(x == 1) return 1;

    return x + sum(x - 1);

}

sum(3);

//Given a string, print all possible palindromic partitions
