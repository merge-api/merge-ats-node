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
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Attachment;
}());
exports.Attachment = Attachment;
//# sourceMappingURL=attachment.js.map