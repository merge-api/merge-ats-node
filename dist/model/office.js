"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Office = void 0;
var Office = (function () {
    function Office() {
    }
    Office.getAttributeTypeMap = function () {
        return Office.attributeTypeMap;
    };
    Office.discriminator = undefined;
    Office.attributeTypeMap = [
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
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Office;
}());
exports.Office = Office;
//# sourceMappingURL=office.js.map