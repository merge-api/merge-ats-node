"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
var Department = (function () {
    function Department() {
    }
    Department.getAttributeTypeMap = function () {
        return Department.attributeTypeMap;
    };
    Department.discriminator = undefined;
    Department.attributeTypeMap = [
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
    return Department;
}());
exports.Department = Department;
//# sourceMappingURL=department.js.map