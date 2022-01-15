"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateEndpointRequest = void 0;
var CandidateEndpointRequest = (function () {
    function CandidateEndpointRequest() {
    }
    CandidateEndpointRequest.getAttributeTypeMap = function () {
        return CandidateEndpointRequest.attributeTypeMap;
    };
    CandidateEndpointRequest.discriminator = undefined;
    CandidateEndpointRequest.attributeTypeMap = [
        {
            "name": "model",
            "baseName": "model",
            "type": "CandidateRequest"
        },
        {
            "name": "remoteUserId",
            "baseName": "remote_user_id",
            "type": "string"
        }
    ];
    return CandidateEndpointRequest;
}());
exports.CandidateEndpointRequest = CandidateEndpointRequest;
//# sourceMappingURL=candidateEndpointRequest.js.map