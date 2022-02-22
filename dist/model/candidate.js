"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Candidate = void 0;
var Candidate = (function () {
    function Candidate() {
    }
    Candidate.getAttributeTypeMap = function () {
        return Candidate.attributeTypeMap;
    };
    Candidate.discriminator = undefined;
    Candidate.attributeTypeMap = [
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
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "remoteCreatedAt",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "remoteUpdatedAt",
            "baseName": "remote_updated_at",
            "type": "Date"
        },
        {
            "name": "lastInteractionAt",
            "baseName": "last_interaction_at",
            "type": "Date"
        },
        {
            "name": "isPrivate",
            "baseName": "is_private",
            "type": "boolean"
        },
        {
            "name": "canEmail",
            "baseName": "can_email",
            "type": "boolean"
        },
        {
            "name": "locations",
            "baseName": "locations",
            "type": "Array<string>"
        },
        {
            "name": "phoneNumbers",
            "baseName": "phone_numbers",
            "type": "Array<PhoneNumber>"
        },
        {
            "name": "emailAddresses",
            "baseName": "email_addresses",
            "type": "Array<EmailAddress>"
        },
        {
            "name": "urls",
            "baseName": "urls",
            "type": "Array<Url>"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "applications",
            "baseName": "applications",
            "type": "Array<string>"
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<string>"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        },
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "{ [key: string]: any; }"
        }
    ];
    return Candidate;
}());
exports.Candidate = Candidate;
//# sourceMappingURL=candidate.js.map