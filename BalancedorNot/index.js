/* 
A string of angled brackets '<' '>' are balanced if there is a unique pair of those.a
for eg: '<><>', '<<>>', 
check if the given number of replacement would make the string of brackets balanced. 
if you encounter '>', you can replace that by <>
for eg: '<<>' this can never be balanced. 

 */


//This solution needs some work

function balancedOrNot(expressions, maxReplacements) { 

    let result = [];
    
        for(let i = 0; i < expressions.length; i++){
            let count = maxReplacements[i];
            
            for(let j in expressions[i]) {

               if(!isBalanced(expressions[i][j])) {

                  if(expressions[i][j] == '>') { 
                      if(count == 0){
                          result.push(0);
                          break;
                      } else {
                          count--;
                      } 
                      
                      
                  } else {
                      result.push(0);
                     break;
                  }
                
               } 
            }      
        }
        result.push(1);
        return result;
           
        
    }
    
    
    function isBalanced(str) {
        let arr = [];
        
                if(str === '<'){
                    arr.push(str);
                } else {
                    if(str === '>'){
                        arr.pop();
                    }   
                }
        
        if(arr.length == 0){
            return true ;
        } 
        
        return false;
        
    }
    