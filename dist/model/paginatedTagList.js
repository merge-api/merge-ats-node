"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedTagList = void 0;
var PaginatedTagList = (function () {
    function PaginatedTagList() {
    }
    PaginatedTagList.getAttributeTypeMap = function () {
        return PaginatedTagList.attributeTypeMap;
    };
    PaginatedTagList.discriminator = undefined;
    PaginatedTagList.attributeTypeMap = [
        {
            "name": "next",
            "baseName": "next",
            "type": "string"
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<Tag>"
        }
    ];
    return PaginatedTagList;
}());
exports.PaginatedTagList = PaginatedTagList;
//# sourceMappingURL=paginatedTagList.js.map