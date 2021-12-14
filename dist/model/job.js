"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
var Job = (function () {
    function Job() {
    }
    Job.getAttributeTypeMap = function () {
        return Job.attributeTypeMap;
    };
    Job.discriminator = undefined;
    Job.attributeTypeMap = [
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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "JobStatusEnum"
        },
        {
            "name": "remoteCreatedAt",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "remoteUpdatedAt",
            "baseName": "remote_updated_at",
            "type": "Date"
        },
        {
            "name": "confidential",
            "baseName": "confidential",
            "type": "boolean"
        },
        {
            "name": "departments",
            "baseName": "departments",
            "type": "Array<string>"
        },
        {
            "name": "offices",
            "baseName": "offices",
            "type": "Array<string>"
        },
        {
            "name": "hiringManagers",
            "baseName": "hiring_managers",
            "type": "Array<string>"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Job;
}());
exports.Job = Job;
//# sourceMappingURL=job.js.map