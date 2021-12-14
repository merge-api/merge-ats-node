"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
var Application = (function () {
    function Application() {
    }
    Application.getAttributeTypeMap = function () {
        return Application.attributeTypeMap;
    };
    Application.discriminator = undefined;
    Application.attributeTypeMap = [
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
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        },
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "{ [key: string]: any; }"
        }
    ];
    return Application;
}());
exports.Application = Application;
//# sourceMappingURL=application.js.map