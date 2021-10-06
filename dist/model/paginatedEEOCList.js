"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedEEOCList = void 0;
var PaginatedEEOCList = (function () {
    function PaginatedEEOCList() {
    }
    PaginatedEEOCList.getAttributeTypeMap = function () {
        return PaginatedEEOCList.attributeTypeMap;
    };
    PaginatedEEOCList.discriminator = undefined;
    PaginatedEEOCList.attributeTypeMap = [
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
            "type": "Array<EEOC>"
        }
    ];
    return PaginatedEEOCList;
}());
exports.PaginatedEEOCList = PaginatedEEOCList;
//# sourceMappingURL=paginatedEEOCList.js.map