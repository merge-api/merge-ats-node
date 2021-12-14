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
            "name": "remoteId",
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
            "name": "remoteCreatedAt",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "closedAt",
            "baseName": "closed_at",
            "type": "Date"
        },
        {
            "name": "sentAt",
            "baseName": "sent_at",
            "type": "Date"
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OfferStatusEnum"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Offer;
}());
exports.Offer = Offer;
//# sourceMappingURL=offer.js.map