"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScorecardRequest = void 0;
var ScorecardRequest = (function () {
    function ScorecardRequest() {
    }
    ScorecardRequest.getAttributeTypeMap = function () {
        return ScorecardRequest.attributeTypeMap;
    };
    ScorecardRequest.discriminator = undefined;
    ScorecardRequest.attributeTypeMap = [
        {
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
        {
            "name": "interview",
            "baseName": "interview",
            "type": "string"
        },
        {
            "name": "interviewer",
            "baseName": "interviewer",
            "type": "string"
        },
        {
            "name": "remote_created_at",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "submitted_at",
            "baseName": "submitted_at",
            "type": "Date"
        },
        {
            "name": "overall_recommendation",
            "baseName": "overall_recommendation",
            "type": "OverallRecommendationEnum"
        }
    ];
    return ScorecardRequest;
}());
exports.ScorecardRequest = ScorecardRequest;
//# sourceMappingURL=scorecardRequest.js.map