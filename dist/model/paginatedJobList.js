"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedJobList = void 0;
var PaginatedJobList = (function () {
    function PaginatedJobList() {
    }
    PaginatedJobList.getAttributeTypeMap = function () {
        return PaginatedJobList.attributeTypeMap;
    };
    PaginatedJobList.discriminator = undefined;
    PaginatedJobList.attributeTypeMap = [
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
            "type": "Array<Job>"
        }
    ];
    return PaginatedJobList;
}());
exports.PaginatedJobList = PaginatedJobList;
//# sourceMappingURL=paginatedJobList.js.map