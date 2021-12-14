"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountDetails = void 0;
var AccountDetails = (function () {
    function AccountDetails() {
    }
    AccountDetails.getAttributeTypeMap = function () {
        return AccountDetails.attributeTypeMap;
    };
    AccountDetails.discriminator = undefined;
    AccountDetails.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "integration",
            "baseName": "integration",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "CategoryEnum"
        },
        {
            "name": "endUserOriginId",
            "baseName": "end_user_origin_id",
            "type": "string"
        },
        {
            "name": "endUserOrganizationName",
            "baseName": "end_user_organization_name",
            "type": "string"
        },
        {
            "name": "endUserEmailAddress",
            "baseName": "end_user_email_address",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }
    ];
    return AccountDetails;
}());
exports.AccountDetails = AccountDetails;
//# sourceMappingURL=accountDetails.js.map