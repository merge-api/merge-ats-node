"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentResponse = void 0;
var AttachmentResponse = (function () {
    function AttachmentResponse() {
    }
    AttachmentResponse.getAttributeTypeMap = function () {
        return AttachmentResponse.attributeTypeMap;
    };
    AttachmentResponse.discriminator = undefined;
    AttachmentResponse.attributeTypeMap = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ValidationProblem>"
        },
        {
            "name": "warnings",
            "baseName": "warnings",
            "type": "Array<ValidationProblem>"
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "Attachment"
        }
    ];
    return AttachmentResponse;
}());
exports.AttachmentResponse = AttachmentResponse;
//# sourceMappingURL=attachmentResponse.js.map