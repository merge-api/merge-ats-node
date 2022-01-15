"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationResponse = void 0;
var ApplicationResponse = (function () {
    function ApplicationResponse() {
    }
    ApplicationResponse.getAttributeTypeMap = function () {
        return ApplicationResponse.attributeTypeMap;
    };
    ApplicationResponse.discriminator = undefined;
    ApplicationResponse.attributeTypeMap = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ValidationProblem>"
        },
        {
            "name": "warnings",
            "baseName": "warnings",
            "type": "Array<ValidationProblem>"
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "Application"
        }
    ];
    return ApplicationResponse;
}());
exports.ApplicationResponse = ApplicationResponse;
//# sourceMappingURL=applicationResponse.js.map