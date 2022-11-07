const plusMinus = (arr) => {

    const arrLength = arr.length;
    let negativeNums = 0;
    let positiveNums = 0;
    let numOfZeros = 0;
    let result = [];
   

    for(let i = 0; i < arrLength; i++){
        if(arr[i] == 0){
            numOfZeros++;
        } else if(Math.sign(arr[i]) == -1 ){
            negativeNums++;
        } else {
            positiveNums++;
        }
        
    }
    
    result.push((numOfZeros/arrLength).toFixed(6));
    result.push((negativeNums/arrLength).toFixed(6));
    result.push((positiveNums/arrLength).toFixed(6));
    
    return result;
}
