"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// export class Sorter {
// constructor(public collection: Sortable) { }
// sort(): void {
//   const { length } = this.collection; //* Destructuring: length = this.collection.length
//   const { collection } = this //*//* Destructuring: collection = this.collection
//   //* Bubble Sort aways runs O(n^2) time to sort the array
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length - 1; j++) {
//       if (collection.compare(j, j + 1)) {
//         collection.swap(j, j + 1)
//       }
//     }
//   }
// }
// }
//* Abstract Classes
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
