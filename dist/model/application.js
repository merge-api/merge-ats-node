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
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Application;
}());
exports.Application = Application;
//# sourceMappingURL=application.js.map