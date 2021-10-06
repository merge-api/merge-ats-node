"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedAttachmentList = void 0;
var PaginatedAttachmentList = (function () {
    function PaginatedAttachmentList() {
    }
    PaginatedAttachmentList.getAttributeTypeMap = function () {
        return PaginatedAttachmentList.attributeTypeMap;
    };
    PaginatedAttachmentList.discriminator = undefined;
    PaginatedAttachmentList.attributeTypeMap = [
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
            "type": "Array<Attachment>"
        }
    ];
    return PaginatedAttachmentList;
}());
exports.PaginatedAttachmentList = PaginatedAttachmentList;
//# sourceMappingURL=paginatedAttachmentList.js.map