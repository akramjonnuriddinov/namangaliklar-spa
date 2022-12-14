// var n = prompt() * 1;
// var arr = [];
// for(var i = 0; i < arr.length; i++) {
//   arr[i] = prompt() * 1;
// }

// var a = arr.sort()
// var res;

// for(var i = 0; i < arr.length; i++) {
//   if(a[i] != a[i+1] || a[i] != a[i-1]) {
//     res = a[i];
//   }
// }
// console.log(res)

// function solve(n, arr) {
//   var a = arr.sort(), res;
//   for(var i = 0; i < n; i++) {
//     if(a[i] != a[i-1] || a[i] != a[i+1]) {
//       res = a[i];
//     }
//   }
//   return res;
// }
// var ab = [0,0,1,2,2,3,3], N = 7;
// console.log(solve(N, ab));

// -----------
// var arr = [3, 5, 5, 2, 2, 3]
// var n = 6
// arr.sort()
// console.log(arr[arr.length - 2])

// function solve(n, nums) {
//   if(n <=100) {
//     nums.sort();
//     return nums[n-2];
//   }
// }
// var arr = [1,2,3,4,5,6]
// var n = 6;
// console.log(solve(n, arr))

// var removeDuplicates = function(nums) {
//   var res = [];
//   for(var i = 0; i < nums.length; i++) {
//     if(nums[i] != nums[i+1]) {
//       res.push(nums[i]);
//     }
//   }
//   // for(var i = res.length; i < nums.length; i++) {
//   //   res.push('_');
//   // }
//   return res.length;
// };

// let nums = [0,0,1,1,1,2,2,3,3,4];
// let res = removeDuplicates(nums);
// console.log(res)

// var num = prompt();
// console.log(Math.round(num/10))

// var rou = function(num) {
//   return(Math.round(num/10))
// }

var longestCommonPrefix = function(strs) {
  var result = [];
  for(var i = 0; i < strs.length; i++) {
    for(var j = 0; j < i.length; j++) {
      if(i[j] == (i+1)[j]) {
        result.push(i[j]);
      }
    }
  }
  return result;
};

var strs = ["flower","flow","flight"]
var res = longestCommonPrefix(strs)
console.log(res)
