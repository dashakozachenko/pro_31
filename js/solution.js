'use strict';

const elemList = document.body.firstElementChild.children;
console.log(elemList.length);

const arr = [];

for (let node of elemList) {
    arr.push(node.innerHTML)
    console.log(node);
}

console.log(arr);



