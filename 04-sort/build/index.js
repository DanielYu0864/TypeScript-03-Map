"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hey yo! How\'s going?\n');
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([1, 50, -25, 6]);
numbersCollection.sort();
console.log('better code: ');
console.log(numbersCollection.data);
var CharacterCollection_1 = require("./CharacterCollection");
var charactersCollection = new CharacterCollection_1.CharacterCollection('woDsEwedWenSod');
charactersCollection.sort();
console.log('string sort');
console.log(charactersCollection.data);
//* LinkedList sort
var LinkList_1 = require("./LinkList");
var linkedList = new LinkList_1.LinkedList();
var addRandom = function (n) {
    for (var i = 0; i < n; i++) {
        linkedList.add(Math.floor(Math.random() * 10000));
    }
};
addRandom(10);
linkedList.sort();
console.log('linked list: ');
linkedList.print();
