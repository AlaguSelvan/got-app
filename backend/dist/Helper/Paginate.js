"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}
exports.default = Paginate;
