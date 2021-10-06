"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteUserRequest = void 0;
var RemoteUserRequest = (function () {
    function RemoteUserRequest() {
    }
    RemoteUserRequest.getAttributeTypeMap = function () {
        return RemoteUserRequest.attributeTypeMap;
    };
    RemoteUserRequest.discriminator = undefined;
    RemoteUserRequest.attributeTypeMap = [
        {
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "first_name",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "last_name",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean"
        },
        {
            "name": "remote_created_at",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "access_role",
            "baseName": "access_role",
            "type": "AccessRoleEnum"
        }
    ];
    return RemoteUserRequest;
}());
exports.RemoteUserRequest = RemoteUserRequest;
//# sourceMappingURL=remoteUserRequest.js.map