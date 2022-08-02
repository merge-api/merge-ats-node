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
import { RemoteData } from './remoteData';
import { ScheduledInterviewStatusEnum } from './scheduledInterviewStatusEnum';

/**
* # The ScheduledInterview Object ### Description The `ScheduledInterview` object is used to represent an interview. ### Usage Example Fetch from the `LIST ScheduledInterviews` endpoint and filter by `interviewers` to show all office locations.
*/
export class ScheduledInterview {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    'application'?: string | null;
    'job_interview_stage'?: string | null;
    'organizer'?: string | null;
    /**
    * Array of `RemoteUser` IDs.
    */
    'interviewers'?: Array<string>;
    /**
    * The interview\'s location.
    */
    'location'?: string | null;
    /**
    * When the interview was started.
    */
    'start_at'?: Date | null;
    /**
    * When the interview was ended.
    */
    'end_at'?: Date | null;
    /**
    * When the third party\'s interview was created.
    */
    'remote_created_at'?: Date | null;
    /**
    * When the third party\'s interview was updated.
    */
    'remote_updated_at'?: Date | null;
    /**
    * The interview\'s status.
    */
    'status'?: ScheduledInterviewStatusEnum | null;
    'remote_data'?: Array<RemoteData> | null;
    /**
    * Indicates whether or not this object has been deleted by third party webhooks.
    */
    'remote_was_deleted'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
        {
            "name": "job_interview_stage",
            "baseName": "job_interview_stage",
            "type": "string"
        },
        {
            "name": "organizer",
            "baseName": "organizer",
            "type": "string"
        },
        {
            "name": "interviewers",
            "baseName": "interviewers",
            "type": "Array<string>"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "start_at",
            "baseName": "start_at",
            "type": "Date"
        },
        {
            "name": "end_at",
            "baseName": "end_at",
            "type": "Date"
        },
        {
            "name": "remote_created_at",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "remote_updated_at",
            "baseName": "remote_updated_at",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ScheduledInterviewStatusEnum"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        },
        {
            "name": "remote_was_deleted",
            "baseName": "remote_was_deleted",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ScheduledInterview.attributeTypeMap;
    }
}

