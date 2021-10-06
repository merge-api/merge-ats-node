"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchedApplicationRequest = void 0;
var PatchedApplicationRequest = (function () {
    function PatchedApplicationRequest() {
    }
    PatchedApplicationRequest.getAttributeTypeMap = function () {
        return PatchedApplicationRequest.attributeTypeMap;
    };
    PatchedApplicationRequest.discriminator = undefined;
    PatchedApplicationRequest.attributeTypeMap = [
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
        }
    ];
    return PatchedApplicationRequest;
}());
exports.PatchedApplicationRequest = PatchedApplicationRequest;
//# sourceMappingURL=patchedApplicationRequest.js.map