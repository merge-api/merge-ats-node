"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedRemoteUserList = void 0;
var PaginatedRemoteUserList = (function () {
    function PaginatedRemoteUserList() {
    }
    PaginatedRemoteUserList.getAttributeTypeMap = function () {
        return PaginatedRemoteUserList.attributeTypeMap;
    };
    PaginatedRemoteUserList.discriminator = undefined;
    PaginatedRemoteUserList.attributeTypeMap = [
        {
            "name": "next",
            "baseName": "next",
            "type": "string"
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<RemoteUser>"
        }
    ];
    return PaginatedRemoteUserList;
}());
exports.PaginatedRemoteUserList = PaginatedRemoteUserList;
//# sourceMappingURL=paginatedRemoteUserList.js.map