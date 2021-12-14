"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlRequest = void 0;
var UrlRequest = (function () {
    function UrlRequest() {
    }
    UrlRequest.getAttributeTypeMap = function () {
        return UrlRequest.attributeTypeMap;
    };
    UrlRequest.discriminator = undefined;
    UrlRequest.attributeTypeMap = [
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
    return UrlRequest;
}());
exports.UrlRequest = UrlRequest;
//# sourceMappingURL=urlRequest.js.map