// let arr=[2,4,5,2,5,3];
// let arr=[4,5,6,7,5,7,
// ];
// let newArr=[];
// for (let i = 0; i < arr.length ; i++) {
//     if (arr[i+1]!=null) {
//        newArr.push(arr[i] + (arr[i+1]) ) ;
//     }
// }
// for (let i = 0; i < arr.length; i++) {
//  if (arr[i]+arr[i+1]==Math.min(...newArr)) {
//     console.log(arr[i],arr[i+1]);
//  }
// }

// let n1=100;
// let a=[]
// let b=[]
// for (let i = 0; i < n; i++) {
//    if (i%2==0) {
//       a.push(i);
//    } else{
//       b.push(i);
//    }
// };

// for (let i = 0; i < a.length; i++) {
//    console.log(a[i],b[i]);
// }

// let str1=prompt('');
// if (str1.length%2!=0) {
// console.log(str1.slice(0,str1.length/2)+str1.slice(str1.length/2+1));
// }else{
//  console.log(str1.slice(0,str1.length/2-1 )+str1.slice(str1.length/2+1) );
// }

// let str='Assalomu Alaykum'
// let newStr=''

// for (let i = 0; i < str.length; i++) {

//     if (str.charAt(i).toUpperCase() == str.charAt(i) && str.charAt(i)!=' ') {
//         newStr+='*'
//     }else{
//         newStr+=str.charAt(i);
//     }
// }
// console.log(newStr);

// let n = 50;
// let m = n * 2;
// let str = "+";
// for (let i = 1; i < m; i++) {
//   if (m / 2 > i) {
//     if (i == 1) {
//       console.log(str);
//     } else {
//       console.log((str += "+"));
//     }
//   } else {
//     if (i!=m-1) {
//         str = str.slice(0, -1);
//         console.log(str);
//     }
//   }
// }

// let arr=[ [1,2,3],
//           [4,5,6],
//           [7,8,9] ]
// console.log(arr);

// let newArr=[] 

// for (let i = 0; i < arr.length; i++) {
//     let  arr1=[]
//      for (let j = 0; j < arr.length; j++) {

//         if (arr[i]==arr[j]) {

//           arr1.push('f');
//         }else{
//           arr1.push(arr[i][j]);
//         }      
//      } 
//      newArr.push(arr1);   
// }
// console.log(newArr);

// for (let j = 0; j < (arr[0].length+arr[1].length+arr[2].length); j++) {}
