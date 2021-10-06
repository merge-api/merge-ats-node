"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedRejectReasonList = void 0;
var PaginatedRejectReasonList = (function () {
    function PaginatedRejectReasonList() {
    }
    PaginatedRejectReasonList.getAttributeTypeMap = function () {
        return PaginatedRejectReasonList.attributeTypeMap;
    };
    PaginatedRejectReasonList.discriminator = undefined;
    PaginatedRejectReasonList.attributeTypeMap = [
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
            "type": "Array<RejectReason>"
        }
    ];
    return PaginatedRejectReasonList;
}());
exports.PaginatedRejectReasonList = PaginatedRejectReasonList;
//# sourceMappingURL=paginatedRejectReasonList.js.map