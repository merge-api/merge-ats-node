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
import { ApplicationRequest } from './applicationRequest';

export class ApplicationEndpointRequest {
    'model': ApplicationRequest;
    'remoteUserId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "model",
            "baseName": "model",
            "type": "ApplicationRequest"
        },
        {
            "name": "remoteUserId",
            "baseName": "remote_user_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationEndpointRequest.attributeTypeMap;
    }
}

