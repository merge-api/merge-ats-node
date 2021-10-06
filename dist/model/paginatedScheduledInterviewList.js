"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedScheduledInterviewList = void 0;
var PaginatedScheduledInterviewList = (function () {
    function PaginatedScheduledInterviewList() {
    }
    PaginatedScheduledInterviewList.getAttributeTypeMap = function () {
        return PaginatedScheduledInterviewList.attributeTypeMap;
    };
    PaginatedScheduledInterviewList.discriminator = undefined;
    PaginatedScheduledInterviewList.attributeTypeMap = [
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
            "type": "Array<ScheduledInterview>"
        }
    ];
    return PaginatedScheduledInterviewList;
}());
exports.PaginatedScheduledInterviewList = PaginatedScheduledInterviewList;
//# sourceMappingURL=paginatedScheduledInterviewList.js.map