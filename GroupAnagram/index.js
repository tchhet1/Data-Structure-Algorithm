

const arr = ['rat', 'jar', 'tar', 'raj','ram', 'arm', 'mar', 'art'];
const groupSimilarWords = (arr = []) => {
   if (arr.length === 0){
      return arr;
   };
   const map = new Map();
   for(let str of arr){
      let sorted = [...str];
      sorted.sort();
      sorted = sorted.join('');
      if(map.has(sorted)){
         map.get(sorted).push(str);
      }else{
         map.set(sorted, [str])
      };
   };
   return [...map.values()];
};
console.log(groupSimilarWords(arr));