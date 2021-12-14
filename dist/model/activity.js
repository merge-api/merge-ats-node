"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
var Activity = (function () {
    function Activity() {
    }
    Activity.getAttributeTypeMap = function () {
        return Activity.attributeTypeMap;
    };
    Activity.discriminator = undefined;
    Activity.attributeTypeMap = [
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
            "name": "user",
            "baseName": "user",
            "type": "string"
        },
        {
            "name": "remoteCreatedAt",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "activityType",
            "baseName": "activity_type",
            "type": "ActivityTypeEnum"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "visibility",
            "baseName": "visibility",
            "type": "VisibilityEnum"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Activity;
}());
exports.Activity = Activity;
//# sourceMappingURL=activity.js.map