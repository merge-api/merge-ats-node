"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumber = void 0;
var PhoneNumber = (function () {
    function PhoneNumber() {
    }
    PhoneNumber.getAttributeTypeMap = function () {
        return PhoneNumber.attributeTypeMap;
    };
    PhoneNumber.discriminator = undefined;
    PhoneNumber.attributeTypeMap = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "phone_number_type",
            "baseName": "phone_number_type",
            "type": "PhoneNumberTypeEnum"
        }
    ];
    return PhoneNumber;
}());
exports.PhoneNumber = PhoneNumber;
//# sourceMappingURL=phoneNumber.js.map