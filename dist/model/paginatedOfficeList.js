"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedOfficeList = void 0;
var PaginatedOfficeList = (function () {
    function PaginatedOfficeList() {
    }
    PaginatedOfficeList.getAttributeTypeMap = function () {
        return PaginatedOfficeList.attributeTypeMap;
    };
    PaginatedOfficeList.discriminator = undefined;
    PaginatedOfficeList.attributeTypeMap = [
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
            "type": "Array<Office>"
        }
    ];
    return PaginatedOfficeList;
}());
exports.PaginatedOfficeList = PaginatedOfficeList;
//# sourceMappingURL=paginatedOfficeList.js.map