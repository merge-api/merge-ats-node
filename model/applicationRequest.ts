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
    'remoteId'?: string | null;
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
    'appliedAt'?: Date | null;
    /**
    * When the application was rejected.
    */
    'rejectedAt'?: Date | null;
    /**
    * The application\'s source.
    */
    'source'?: string | null;
    /**
    * The user credited for this application.
    */
    'creditedTo'?: string | null;
    /**
    * The application\'s current stage.
    */
    'currentStage'?: string | null;
    /**
    * The application\'s reason for rejection.
    */
    'rejectReason'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "remoteId",
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
            "name": "appliedAt",
            "baseName": "applied_at",
            "type": "Date"
        },
        {
            "name": "rejectedAt",
            "baseName": "rejected_at",
            "type": "Date"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "creditedTo",
            "baseName": "credited_to",
            "type": "string"
        },
        {
            "name": "currentStage",
            "baseName": "current_stage",
            "type": "string"
        },
        {
            "name": "rejectReason",
            "baseName": "reject_reason",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationRequest.attributeTypeMap;
    }
}

