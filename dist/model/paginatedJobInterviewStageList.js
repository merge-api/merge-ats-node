"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedJobInterviewStageList = void 0;
var PaginatedJobInterviewStageList = (function () {
    function PaginatedJobInterviewStageList() {
    }
    PaginatedJobInterviewStageList.getAttributeTypeMap = function () {
        return PaginatedJobInterviewStageList.attributeTypeMap;
    };
    PaginatedJobInterviewStageList.discriminator = undefined;
    PaginatedJobInterviewStageList.attributeTypeMap = [
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
            "type": "Array<JobInterviewStage>"
        }
    ];
    return PaginatedJobInterviewStageList;
}());
exports.PaginatedJobInterviewStageList = PaginatedJobInterviewStageList;
//# sourceMappingURL=paginatedJobInterviewStageList.js.map