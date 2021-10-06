"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateRequest = void 0;
var CandidateRequest = (function () {
    function CandidateRequest() {
    }
    CandidateRequest.getAttributeTypeMap = function () {
        return CandidateRequest.attributeTypeMap;
    };
    CandidateRequest.discriminator = undefined;
    CandidateRequest.attributeTypeMap = [
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
            "type": "Array<PhoneNumberRequest>"
        },
        {
            "name": "email_addresses",
            "baseName": "email_addresses",
            "type": "Array<EmailAddressRequest>"
        },
        {
            "name": "urls",
            "baseName": "urls",
            "type": "Array<UrlRequest>"
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
        }
    ];
    return CandidateRequest;
}());
exports.CandidateRequest = CandidateRequest;
//# sourceMappingURL=candidateRequest.js.map