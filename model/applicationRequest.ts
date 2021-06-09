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

/**
* # The Application Object ### Description The `Application` object is used to represent an Application for a job position.  ### Usage Example Fetch from the `LIST Applications` endpoint and filter by `ID` to show all applications.
*/
export class ApplicationRequest {
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    /**
    * The candidate applying.
    */
    'candidate'?: string | null;
    /**
    * The job being applied for.
    */
    'job'?: string | null;
    /**
    * When the application was submitted.
    */
    'applied_at'?: Date | null;
    /**
    * When the application was rejected.
    */
    'rejected_at'?: Date | null;
    /**
    * The application\'s source.
    */
    'source'?: string | null;
    /**
    * The user credited for this application.
    */
    'credited_to'?: string | null;
    /**
    * The application\'s current stage.
    */
    'current_stage'?: string | null;
    /**
    * The application\'s reason for rejection.
    */
    'reject_reason'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "job",
            "baseName": "job",
            "type": "string"
        },
        {
            "name": "applied_at",
            "baseName": "applied_at",
            "type": "Date"
        },
        {
            "name": "rejected_at",
            "baseName": "rejected_at",
            "type": "Date"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "credited_to",
            "baseName": "credited_to",
            "type": "string"
        },
        {
            "name": "current_stage",
            "baseName": "current_stage",
            "type": "string"
        },
        {
            "name": "reject_reason",
            "baseName": "reject_reason",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationRequest.attributeTypeMap;
    }
}

