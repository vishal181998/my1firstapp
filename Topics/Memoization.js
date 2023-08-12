/*In programming, memoization is an optimization technique that makes applications more efficient and hence faster.
 It does this by storing computation results in cache, and retrieving that same information from the cache the next time it
's needed instead of computing it again.*/
//whithout memoization
//  function fib(n){
//     if(n<=1)
//     {
//         return n;
//     }
//     return fib(n-1)+fib(n-2)
//  }
//  console.log(fib(6))
// const sq =(n) =>{
//     let res=0
//     for(let i=1;i<=n;i++)
//     {
//         for(let j=1;j<=n;j++)
//         {
//             res=res+1
//         }
//     }
//     return res
// }
// pree=[]
// const sq =(n) =>{
//     if(pree[n]){
//         return pree[n];
//     }
//     let res=0
//     for(let i=1;i<=n;i++)
//     {
//         for(let j=1;j<=n;j++)
//         {
//             res=res+1
//         }
//     }
//     pree[n]=res
//     return res
// }
console.log(sq(50000))
console.log(sq(50000))
console.log(sq(50000))
console.log(sq(50000))
console.log(sq(50000))


 //with memoization using an array store previous value
 
//  function fib(n,prev=[]){
//     if(prev[n]!=null)
//     {
//         return prev[n]
//     }
//     let res;
//     if(n<=2)
//     {
//         res = 1;
//     }else{
//     res=fib(n-1,prev)+fib(n-2,prev)
//     }
//     prev[n]=res
//     console.log(res)
//     return res
//  }
//  console.log(fib(90))
