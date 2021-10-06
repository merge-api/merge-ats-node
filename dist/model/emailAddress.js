"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAddress = void 0;
var EmailAddress = (function () {
    function EmailAddress() {
    }
    EmailAddress.getAttributeTypeMap = function () {
        return EmailAddress.attributeTypeMap;
    };
    EmailAddress.discriminator = undefined;
    EmailAddress.attributeTypeMap = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "email_address_type",
            "baseName": "email_address_type",
            "type": "EmailAddressTypeEnum"
        }
    ];
    return EmailAddress;
}());
exports.EmailAddress = EmailAddress;
//# sourceMappingURL=emailAddress.js.map