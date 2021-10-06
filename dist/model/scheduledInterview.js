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
            "name": "job_interview_stage",
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
            "name": "start_at",
            "baseName": "start_at",
            "type": "Date"
        },
        {
            "name": "end_at",
            "baseName": "end_at",
            "type": "Date"
        },
        {
            "name": "remote_created_at",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "remote_updated_at",
            "baseName": "remote_updated_at",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ScheduledInterviewStatusEnum"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return ScheduledInterview;
}());
exports.ScheduledInterview = ScheduledInterview;
//# sourceMappingURL=scheduledInterview.js.map