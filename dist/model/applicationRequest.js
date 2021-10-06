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
            "name": "remote_id",
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
            "name": "applied_at",
            "baseName": "applied_at",
            "type": "Date"
        },
        {
            "name": "rejected_at",
            "baseName": "rejected_at",
            "type": "Date"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "credited_to",
            "baseName": "credited_to",
            "type": "string"
        },
        {
            "name": "current_stage",
            "baseName": "current_stage",
            "type": "string"
        },
        {
            "name": "reject_reason",
            "baseName": "reject_reason",
            "type": "string"
        }
    ];
    return ApplicationRequest;
}());
exports.ApplicationRequest = ApplicationRequest;
//# sourceMappingURL=applicationRequest.js.map