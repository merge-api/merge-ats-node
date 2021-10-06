"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedOfferList = void 0;
var PaginatedOfferList = (function () {
    function PaginatedOfferList() {
    }
    PaginatedOfferList.getAttributeTypeMap = function () {
        return PaginatedOfferList.attributeTypeMap;
    };
    PaginatedOfferList.discriminator = undefined;
    PaginatedOfferList.attributeTypeMap = [
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
            "type": "Array<Offer>"
        }
    ];
    return PaginatedOfferList;
}());
exports.PaginatedOfferList = PaginatedOfferList;
//# sourceMappingURL=paginatedOfferList.js.map