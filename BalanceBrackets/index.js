

//const str = "()"; Balanced
//const str = "())"; Not Balanced 
//"("
//"()"



const bracks = {
    '(': ')',
}

const stack = [];


const balanceBrackets = (str) => {

    for(let i = 0; i < str.length; i++){
        if(!isBalanced(str[i])){
            stack.push('#');
        }
    }

    return stack;

}


const isBalanced = (str) => {
   
     if(str == '(' || str == '{'){
        stack.push(str);
    } else {
        let stackPop = stack.pop();
        if(str !== bracks[stackPop]){
            return false;
        }
    }
    
    return true;

}

//Solution from stackoverflow


function balanceParenthesesCount(str) {
    let brackets = [];

    for (let i = 0; i < str.length; i++) {     
        if (str[i] === "(") {
            //if opening bracket is found push it in the brackets
            brackets.push(str[i]);

        } else if (str[i] === ")") {
            //if closing bracktes is found pop the last element 
            if (brackets.at(-1) === "(") brackets.pop();
            else brackets.push("#");
        }
    }
    return brackets.length;
}

console.log(checkParentheses('()))'));

'()(' 