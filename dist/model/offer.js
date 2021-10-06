"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Offer = void 0;
var Offer = (function () {
    function Offer() {
    }
    Offer.getAttributeTypeMap = function () {
        return Offer.attributeTypeMap;
    };
    Offer.discriminator = undefined;
    Offer.attributeTypeMap = [
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
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
        {
            "name": "creator",
            "baseName": "creator",
            "type": "string"
        },
        {
            "name": "remote_created_at",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "closed_at",
            "baseName": "closed_at",
            "type": "Date"
        },
        {
            "name": "sent_at",
            "baseName": "sent_at",
            "type": "Date"
        },
        {
            "name": "start_date",
            "baseName": "start_date",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OfferStatusEnum"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Offer;
}());
exports.Offer = Offer;
//# sourceMappingURL=offer.js.map