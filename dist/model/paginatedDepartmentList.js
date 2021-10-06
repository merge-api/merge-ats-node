"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedDepartmentList = void 0;
var PaginatedDepartmentList = (function () {
    function PaginatedDepartmentList() {
    }
    PaginatedDepartmentList.getAttributeTypeMap = function () {
        return PaginatedDepartmentList.attributeTypeMap;
    };
    PaginatedDepartmentList.discriminator = undefined;
    PaginatedDepartmentList.attributeTypeMap = [
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
            "type": "Array<Department>"
        }
    ];
    return PaginatedDepartmentList;
}());
exports.PaginatedDepartmentList = PaginatedDepartmentList;
//# sourceMappingURL=paginatedDepartmentList.js.map