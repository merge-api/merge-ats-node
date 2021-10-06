"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduledInterviewRequest = void 0;
var ScheduledInterviewRequest = (function () {
    function ScheduledInterviewRequest() {
    }
    ScheduledInterviewRequest.getAttributeTypeMap = function () {
        return ScheduledInterviewRequest.attributeTypeMap;
    };
    ScheduledInterviewRequest.discriminator = undefined;
    ScheduledInterviewRequest.attributeTypeMap = [
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
        }
    ];
    return ScheduledInterviewRequest;
}());
exports.ScheduledInterviewRequest = ScheduledInterviewRequest;
//# sourceMappingURL=scheduledInterviewRequest.js.map