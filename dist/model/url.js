"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
var Url = (function () {
    function Url() {
    }
    Url.getAttributeTypeMap = function () {
        return Url.attributeTypeMap;
    };
    Url.discriminator = undefined;
    Url.attributeTypeMap = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "urlType",
            "baseName": "url_type",
            "type": "UrlTypeEnum"
        }
    ];
    return Url;
}());
exports.Url = Url;
//# sourceMappingURL=url.js.map