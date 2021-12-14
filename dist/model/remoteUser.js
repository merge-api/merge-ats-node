"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteUser = void 0;
var RemoteUser = (function () {
    function RemoteUser() {
    }
    RemoteUser.getAttributeTypeMap = function () {
        return RemoteUser.attributeTypeMap;
    };
    RemoteUser.discriminator = undefined;
    RemoteUser.attributeTypeMap = [
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
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "lastName",
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
            "name": "remoteCreatedAt",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "accessRole",
            "baseName": "access_role",
            "type": "AccessRoleEnum"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return RemoteUser;
}());
exports.RemoteUser = RemoteUser;
//# sourceMappingURL=remoteUser.js.map