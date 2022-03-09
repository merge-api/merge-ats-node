/**
 * Merge ATS API
 * The unified API for building rich integrations with multiple Applicant Tracking System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Candidate } from './candidate';
import { DebugModeLog } from './debugModeLog';
import { ErrorValidationProblem } from './errorValidationProblem';
import { WarningValidationProblem } from './warningValidationProblem';

export class CandidateResponse {
    'model': Candidate;
    'warnings': Array<WarningValidationProblem>;
    'errors': Array<ErrorValidationProblem>;
    'logs'?: Array<DebugModeLog>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "model",
            "baseName": "model",
            "type": "Candidate"
        },
        {
            "name": "warnings",
            "baseName": "warnings",
            "type": "Array<WarningValidationProblem>"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ErrorValidationProblem>"
        },
        {
            "name": "logs",
            "baseName": "logs",
            "type": "Array<DebugModeLog>"
        }    ];

    static getAttributeTypeMap() {
        return CandidateResponse.attributeTypeMap;
    }
}

