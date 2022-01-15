"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationEndpointRequest = void 0;
var ApplicationEndpointRequest = (function () {
    function ApplicationEndpointRequest() {
    }
    ApplicationEndpointRequest.getAttributeTypeMap = function () {
        return ApplicationEndpointRequest.attributeTypeMap;
    };
    ApplicationEndpointRequest.discriminator = undefined;
    ApplicationEndpointRequest.attributeTypeMap = [
        {
            "name": "model",
            "baseName": "model",
            "type": "ApplicationRequest"
        },
        {
            "name": "remoteUserId",
            "baseName": "remote_user_id",
            "type": "string"
        }
    ];
    return ApplicationEndpointRequest;
}());
exports.ApplicationEndpointRequest = ApplicationEndpointRequest;
//# sourceMappingURL=applicationEndpointRequest.js.map