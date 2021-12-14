"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduledInterview = void 0;
var ScheduledInterview = (function () {
    function ScheduledInterview() {
    }
    ScheduledInterview.getAttributeTypeMap = function () {
        return ScheduledInterview.attributeTypeMap;
    };
    ScheduledInterview.discriminator = undefined;
    ScheduledInterview.attributeTypeMap = [
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
            "name": "jobInterviewStage",
            "baseName": "job_interview_stage",
            "type": "string"
        },
        {
            "name": "organizer",
            "baseName": "organizer",
            "type": "string"
        },
        {
            "name": "interviewers",
            "baseName": "interviewers",
            "type": "Array<string>"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "startAt",
            "baseName": "start_at",
            "type": "Date"
        },
        {
            "name": "endAt",
            "baseName": "end_at",
            "type": "Date"
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
            "name": "status",
            "baseName": "status",
            "type": "ScheduledInterviewStatusEnum"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return ScheduledInterview;
}());
exports.ScheduledInterview = ScheduledInterview;
//# sourceMappingURL=scheduledInterview.js.map