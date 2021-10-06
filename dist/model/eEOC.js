"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EEOC = void 0;
var EEOC = (function () {
    function EEOC() {
    }
    EEOC.getAttributeTypeMap = function () {
        return EEOC.attributeTypeMap;
    };
    EEOC.discriminator = undefined;
    EEOC.attributeTypeMap = [
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
            "name": "candidate",
            "baseName": "candidate",
            "type": "string"
        },
        {
            "name": "submitted_at",
            "baseName": "submitted_at",
            "type": "Date"
        },
        {
            "name": "race",
            "baseName": "race",
            "type": "RaceEnum"
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "GenderEnum"
        },
        {
            "name": "veteran_status",
            "baseName": "veteran_status",
            "type": "VeteranStatusEnum"
        },
        {
            "name": "disability_status",
            "baseName": "disability_status",
            "type": "DisabilityStatusEnum"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return EEOC;
}());
exports.EEOC = EEOC;
//# sourceMappingURL=eEOC.js.map