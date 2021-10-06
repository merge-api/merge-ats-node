"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedActivityList = void 0;
var PaginatedActivityList = (function () {
    function PaginatedActivityList() {
    }
    PaginatedActivityList.getAttributeTypeMap = function () {
        return PaginatedActivityList.attributeTypeMap;
    };
    PaginatedActivityList.discriminator = undefined;
    PaginatedActivityList.attributeTypeMap = [
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
            "type": "Array<Activity>"
        }
    ];
    return PaginatedActivityList;
}());
exports.PaginatedActivityList = PaginatedActivityList;
//# sourceMappingURL=paginatedActivityList.js.map