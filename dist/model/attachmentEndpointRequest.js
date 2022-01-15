"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentEndpointRequest = void 0;
var AttachmentEndpointRequest = (function () {
    function AttachmentEndpointRequest() {
    }
    AttachmentEndpointRequest.getAttributeTypeMap = function () {
        return AttachmentEndpointRequest.attributeTypeMap;
    };
    AttachmentEndpointRequest.discriminator = undefined;
    AttachmentEndpointRequest.attributeTypeMap = [
        {
            "name": "model",
            "baseName": "model",
            "type": "AttachmentRequest"
        },
        {
            "name": "remoteUserId",
            "baseName": "remote_user_id",
            "type": "string"
        }
    ];
    return AttachmentEndpointRequest;
}());
exports.AttachmentEndpointRequest = AttachmentEndpointRequest;
//# sourceMappingURL=attachmentEndpointRequest.js.map