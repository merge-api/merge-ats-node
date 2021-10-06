"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RejectReason = void 0;
var RejectReason = (function () {
    function RejectReason() {
    }
    RejectReason.getAttributeTypeMap = function () {
        return RejectReason.attributeTypeMap;
    };
    RejectReason.discriminator = undefined;
    RejectReason.attributeTypeMap = [
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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return RejectReason;
}());
exports.RejectReason = RejectReason;
//# sourceMappingURL=rejectReason.js.map