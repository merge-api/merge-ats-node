"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
var Attachment = (function () {
    function Attachment() {
    }
    Attachment.getAttributeTypeMap = function () {
        return Attachment.attributeTypeMap;
    };
    Attachment.discriminator = undefined;
    Attachment.attributeTypeMap = [
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
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Attachment;
}());
exports.Attachment = Attachment;
//# sourceMappingURL=attachment.js.map