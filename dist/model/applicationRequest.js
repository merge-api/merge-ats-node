"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationRequest = void 0;
var ApplicationRequest = (function () {
    function ApplicationRequest() {
    }
    ApplicationRequest.getAttributeTypeMap = function () {
        return ApplicationRequest.attributeTypeMap;
    };
    ApplicationRequest.discriminator = undefined;
    ApplicationRequest.attributeTypeMap = [
        {
            "name": "remoteId",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "candidate",
            "baseName": "candidate",
            "type": "string"
        },
        {
            "name": "job",
            "baseName": "job",
            "type": "string"
        },
        {
            "name": "appliedAt",
            "baseName": "applied_at",
            "type": "Date"
        },
        {
            "name": "rejectedAt",
            "baseName": "rejected_at",
            "type": "Date"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "creditedTo",
            "baseName": "credited_to",
            "type": "string"
        },
        {
            "name": "currentStage",
            "baseName": "current_stage",
            "type": "string"
        },
        {
            "name": "rejectReason",
            "baseName": "reject_reason",
            "type": "string"
        },
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "{ [key: string]: any; }"
        }
    ];
    return ApplicationRequest;
}());
exports.ApplicationRequest = ApplicationRequest;
//# sourceMappingURL=applicationRequest.js.map