let total = [0, 1, 2, 3].reduce(function(sum,value){
    return sum + value;
}, 0);
console.log(total)

let flattened = [[0,1], [2, 3], [4, 5]].reduce(function(a,b){
    return a.concat(b);
},[]);
console.log(flattened);

/* arr.reduce(callback[, initialValue] ) */

/**
 * reduce 为数组中每一个元素依次执行callback函数，不包括数组中被删除或从未被赋值的元素，接受四个参数。
 * accumulator
 * currentValue
 * currentIndex
 * array
 * 
 * 在回调第一次执行的时，accumulator 和 currentValue 有两种情况
 * 1. if（initialValue）
 * accumulator = initialValue 
 * currentValue = arr[0];
 * 
 * 
 * 2. if(!initialValue)
 * accumulator = arr[0];
 * currentValue = arr[1];
 * 
 * Special case
 * 
 * 3. if(arr === [] && !initialValue)
 * Type error;
 * 
 * 4 if(arr,length === 1 && !initialValue)
 *  return arr[0]
 * 
 * 5 if(arr === [] && initialValue)
 * return initialValue
 */

 let maxCallback = ( pre,cur ) => {
     return Math.max(pre.x, cur.x);  
 };

 let maxCallback2 = ( max, cur ) => {
     return Math.max( max, cur );
 };
 
 console.log([ { x:22 }, { x:42 } ].reduce( maxCallback )); // 42
 console.log([ { x:22 } ].reduce( maxCallback ));          // {x: 22}
 //console.log([ ].reduce( maxCallback ));                   // TypeError

 //Map reduce; better solution
 console.log([ { x:22 }, { x:42 } ].map(el => el.x).reduce(maxCallback2, -Infinity))
 