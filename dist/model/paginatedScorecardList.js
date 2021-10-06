"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedScorecardList = void 0;
var PaginatedScorecardList = (function () {
    function PaginatedScorecardList() {
    }
    PaginatedScorecardList.getAttributeTypeMap = function () {
        return PaginatedScorecardList.attributeTypeMap;
    };
    PaginatedScorecardList.discriminator = undefined;
    PaginatedScorecardList.attributeTypeMap = [
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
            "type": "Array<Scorecard>"
        }
    ];
    return PaginatedScorecardList;
}());
exports.PaginatedScorecardList = PaginatedScorecardList;
//# sourceMappingURL=paginatedScorecardList.js.map