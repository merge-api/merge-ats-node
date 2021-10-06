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
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "file_name",
            "baseName": "file_name",
            "type": "string"
        },
        {
            "name": "file_url",
            "baseName": "file_url",
            "type": "string"
        },
        {
            "name": "candidate",
            "baseName": "candidate",
            "type": "string"
        },
        {
            "name": "attachment_type",
            "baseName": "attachment_type",
            "type": "AttachmentTypeEnum"
        }
    ];
    return AttachmentRequest;
}());
exports.AttachmentRequest = AttachmentRequest;
//# sourceMappingURL=attachmentRequest.js.map