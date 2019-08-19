'use strict';

function collectSameElements(collectionA, collectionB) {
  // if(Object.prototype.toString.call(collectionA)=="[Object Array]" && Object.prototype.toString.call(collectionB)=="[object Array]"){
  //     return collectionA.filter(function(v){

  //       return collectionB.indexOf(v)!==-1
  //     })
  // }

//   var result = collectionB.filter(function(v){
//     return collectionA.indexOf(v)!==-1 // 利用filter方法来遍历是否有相同的元素
// })
var c = collectionA.filter(function(v){ return collectionB.indexOf(v) > -1 })
return c
 // return '实现练习要求，并改写该行代码。';
}
