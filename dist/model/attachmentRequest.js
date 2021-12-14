"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentRequest = void 0;
var AttachmentRequest = (function () {
    function AttachmentRequest() {
    }
    AttachmentRequest.getAttributeTypeMap = function () {
        return AttachmentRequest.attributeTypeMap;
    };
    AttachmentRequest.discriminator = undefined;
    AttachmentRequest.attributeTypeMap = [
        {
            "name": "remoteId",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "fileName",
            "baseName": "file_name",
            "type": "string"
        },
        {
            "name": "fileUrl",
            "baseName": "file_url",
            "type": "string"
        },
        {
            "name": "candidate",
            "baseName": "candidate",
            "type": "string"
        },
        {
            "name": "attachmentType",
            "baseName": "attachment_type",
            "type": "AttachmentTypeEnum"
        }
    ];
    return AttachmentRequest;
}());
exports.AttachmentRequest = AttachmentRequest;
//# sourceMappingURL=attachmentRequest.js.map