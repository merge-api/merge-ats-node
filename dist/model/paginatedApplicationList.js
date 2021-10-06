"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedApplicationList = void 0;
var PaginatedApplicationList = (function () {
    function PaginatedApplicationList() {
    }
    PaginatedApplicationList.getAttributeTypeMap = function () {
        return PaginatedApplicationList.attributeTypeMap;
    };
    PaginatedApplicationList.discriminator = undefined;
    PaginatedApplicationList.attributeTypeMap = [
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
            "type": "Array<Application>"
        }
    ];
    return PaginatedApplicationList;
}());
exports.PaginatedApplicationList = PaginatedApplicationList;
//# sourceMappingURL=paginatedApplicationList.js.map