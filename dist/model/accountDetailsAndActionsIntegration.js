"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountDetailsAndActionsIntegration = void 0;
var AccountDetailsAndActionsIntegration = (function () {
    function AccountDetailsAndActionsIntegration() {
    }
    AccountDetailsAndActionsIntegration.getAttributeTypeMap = function () {
        return AccountDetailsAndActionsIntegration.attributeTypeMap;
    };
    AccountDetailsAndActionsIntegration.discriminator = undefined;
    AccountDetailsAndActionsIntegration.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<CategoriesEnum>"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
        {
            "name": "squareImage",
            "baseName": "square_image",
            "type": "string"
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "string"
        },
        {
            "name": "slug",
            "baseName": "slug",
            "type": "string"
        },
        {
            "name": "passthroughAvailable",
            "baseName": "passthrough_available",
            "type": "boolean"
        },
        {
            "name": "availableModelOperations",
            "baseName": "available_model_operations",
            "type": "Array<ModelOperation>"
        }
    ];
    return AccountDetailsAndActionsIntegration;
}());
exports.AccountDetailsAndActionsIntegration = AccountDetailsAndActionsIntegration;
//# sourceMappingURL=accountDetailsAndActionsIntegration.js.map