"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateResponse = void 0;
var CandidateResponse = (function () {
    function CandidateResponse() {
    }
    CandidateResponse.getAttributeTypeMap = function () {
        return CandidateResponse.attributeTypeMap;
    };
    CandidateResponse.discriminator = undefined;
    CandidateResponse.attributeTypeMap = [
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
            "type": "Candidate"
        }
    ];
    return CandidateResponse;
}());
exports.CandidateResponse = CandidateResponse;
//# sourceMappingURL=candidateResponse.js.map