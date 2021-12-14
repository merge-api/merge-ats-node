"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberRequest = void 0;
var PhoneNumberRequest = (function () {
    function PhoneNumberRequest() {
    }
    PhoneNumberRequest.getAttributeTypeMap = function () {
        return PhoneNumberRequest.attributeTypeMap;
    };
    PhoneNumberRequest.discriminator = undefined;
    PhoneNumberRequest.attributeTypeMap = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "phoneNumberType",
            "baseName": "phone_number_type",
            "type": "PhoneNumberTypeEnum"
        }
    ];
    return PhoneNumberRequest;
}());
exports.PhoneNumberRequest = PhoneNumberRequest;
//# sourceMappingURL=phoneNumberRequest.js.map