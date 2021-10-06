"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedCandidateList = void 0;
var PaginatedCandidateList = (function () {
    function PaginatedCandidateList() {
    }
    PaginatedCandidateList.getAttributeTypeMap = function () {
        return PaginatedCandidateList.attributeTypeMap;
    };
    PaginatedCandidateList.discriminator = undefined;
    PaginatedCandidateList.attributeTypeMap = [
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
            "type": "Array<Candidate>"
        }
    ];
    return PaginatedCandidateList;
}());
exports.PaginatedCandidateList = PaginatedCandidateList;
//# sourceMappingURL=paginatedCandidateList.js.map