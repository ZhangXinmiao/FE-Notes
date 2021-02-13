// const arr = [
//     { id: 1, name: 'i1' },
//     { id: 2, name: 'i2', parentId: 1 },
//     { id: 4, name: 'i4', parentId: 3 },
//     { id: 3, name: 'i3', parentId: 2 },
//     { id: 5, name: 'i5', parentId: 3 },
//     { id: 7, name: 'i7', parentId: 5 },
//     { id: 8, name: 'i8', parentId: 7 }
//   ];
  
//   const result = {
//       id: 1,
//       children: [
//         { 
//           id: 2,
//           children: [
//             {
//                 id: 3
//             }
//           ]
//         }
//       ]
//   }
  
  /* 可以将数组转化为树状数据结构*/
  // function node (nodeInfo, children) {
  //   this.nodeInfo = nodeInfo;
  //   this.children = [];
  // }
//   function getChildrenById (id) {
//         return currentChildrenDescribes = arr.filter(function (item) {
//         return item.parentId === id;
//       });
//   }
//   function buildTree(arr, root = {}, len = arr.length) {

//         if (!len) return root;
//       var children = getChildrenById(root.parentId);
//       len = len - children.length;
//       for(var i = 0; i < children.length; i++) {
//         children[i] = buildTree(arr, children[i]);
//       }
//       root.children = children;
            
//       return root;
//   }

function tree (arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].children = arr.filter(function (item) {
            return item.parentId === arr[i].id;
        });
    }
    return arr.filter(function (item) {
        return !item.parentId;
    });
}

const arr = [
    { id: 1, name: 'i1' },
    { id: 2, name: 'i2', parentId: 1 },
    { id: 4, name: 'i4', parentId: 3 },
    { id: 3, name: 'i3', parentId: 2 },
    { id: 5, name: 'i5', parentId: 3 },
    { id: 7, name: 'i7', parentId: 5 },
    { id: 8, name: 'i8', parentId: 7 }
];

console.log(tree(arr));
  