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
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "first_name",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "last_name",
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
            "name": "remote_created_at",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "remote_updated_at",
            "baseName": "remote_updated_at",
            "type": "Date"
        },
        {
            "name": "last_interaction_at",
            "baseName": "last_interaction_at",
            "type": "Date"
        },
        {
            "name": "is_private",
            "baseName": "is_private",
            "type": "boolean"
        },
        {
            "name": "can_email",
            "baseName": "can_email",
            "type": "boolean"
        },
        {
            "name": "locations",
            "baseName": "locations",
            "type": "Array<string>"
        },
        {
            "name": "phone_numbers",
            "baseName": "phone_numbers",
            "type": "Array<PhoneNumber>"
        },
        {
            "name": "email_addresses",
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
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Candidate;
}());
exports.Candidate = Candidate;
//# sourceMappingURL=candidate.js.map