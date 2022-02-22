"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scorecard = void 0;
var Scorecard = (function () {
    function Scorecard() {
    }
    Scorecard.getAttributeTypeMap = function () {
        return Scorecard.attributeTypeMap;
    };
    Scorecard.discriminator = undefined;
    Scorecard.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "remoteId",
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
            "name": "remoteCreatedAt",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "submittedAt",
            "baseName": "submitted_at",
            "type": "Date"
        },
        {
            "name": "overallRecommendation",
            "baseName": "overall_recommendation",
            "type": "OverallRecommendationEnum"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Scorecard;
}());
exports.Scorecard = Scorecard;
//# sourceMappingURL=scorecard.js.map