"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAddressRequest = void 0;
var EmailAddressRequest = (function () {
    function EmailAddressRequest() {
    }
    EmailAddressRequest.getAttributeTypeMap = function () {
        return EmailAddressRequest.attributeTypeMap;
    };
    EmailAddressRequest.discriminator = undefined;
    EmailAddressRequest.attributeTypeMap = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "emailAddressType",
            "baseName": "email_address_type",
            "type": "EmailAddressTypeEnum"
        }
    ];
    return EmailAddressRequest;
}());
exports.EmailAddressRequest = EmailAddressRequest;
//# sourceMappingURL=emailAddressRequest.js.map