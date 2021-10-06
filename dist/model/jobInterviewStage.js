"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobInterviewStage = void 0;
var JobInterviewStage = (function () {
    function JobInterviewStage() {
    }
    JobInterviewStage.getAttributeTypeMap = function () {
        return JobInterviewStage.attributeTypeMap;
    };
    JobInterviewStage.discriminator = undefined;
    JobInterviewStage.attributeTypeMap = [
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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "job",
            "baseName": "job",
            "type": "string"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return JobInterviewStage;
}());
exports.JobInterviewStage = JobInterviewStage;
//# sourceMappingURL=jobInterviewStage.js.map