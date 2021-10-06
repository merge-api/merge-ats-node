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
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Scorecard;
}());
exports.Scorecard = Scorecard;
//# sourceMappingURL=scorecard.js.map