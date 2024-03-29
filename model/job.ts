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
import { JobStatusEnum } from './jobStatusEnum';
import { RemoteData } from './remoteData';

/**
* # The Job Object ### Description The `Job` object is used to represent a Job offering at a company. ### Usage Example Fetch from the `LIST Jobs` endpoint to show all job postings.
*/
export class Job {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    /**
    * The job\'s name.
    */
    'name'?: string | null;
    /**
    * The job\'s description.
    */
    'description'?: string | null;
    /**
    * The job\'s code. Typically an additional identifier used to reference the particular job that is displayed on the ATS.
    */
    'code'?: string | null;
    /**
    * The job\'s status.
    */
    'status'?: JobStatusEnum | null;
    /**
    * When the third party\'s job was created.
    */
    'remote_created_at'?: Date | null;
    /**
    * When the third party\'s job was updated.
    */
    'remote_updated_at'?: Date | null;
    /**
    * Whether the job is confidential.
    */
    'confidential'?: boolean | null;
    /**
    * IDs of `Department` objects for this `Job`.
    */
    'departments'?: Array<string>;
    /**
    * IDs of `Office` objects for this `Job`.
    */
    'offices'?: Array<string>;
    /**
    * IDs of `RemoteUser` objects that serve as hiring managers for this `Job`.
    */
    'hiring_managers'?: Array<string>;
    /**
    * IDs of `RemoteUser` objects that serve as recruiters for this `Job`.
    */
    'recruiters'?: Array<string>;
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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "JobStatusEnum"
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
            "name": "confidential",
            "baseName": "confidential",
            "type": "boolean"
        },
        {
            "name": "departments",
            "baseName": "departments",
            "type": "Array<string>"
        },
        {
            "name": "offices",
            "baseName": "offices",
            "type": "Array<string>"
        },
        {
            "name": "hiring_managers",
            "baseName": "hiring_managers",
            "type": "Array<string>"
        },
        {
            "name": "recruiters",
            "baseName": "recruiters",
            "type": "Array<string>"
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
        return Job.attributeTypeMap;
    }
}

