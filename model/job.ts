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
* # The Job Object ### Description The `Job` object is used to represent a Location offering at a company.  ### Usage Example Fetch from the `LIST Jobs` endpoint and filter by `ID` to show all job postings.
*/
export class Job {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remoteId'?: string | null;
    /**
    * The job\'s name.
    */
    'name'?: string | null;
    /**
    * The job\'s description.
    */
    'description'?: string | null;
    /**
    * The job\'s status.
    */
    'status'?: JobStatusEnum | null;
    /**
    * When the third party\'s job was created.
    */
    'remoteCreatedAt'?: Date | null;
    /**
    * When the third party\'s job was updated.
    */
    'remoteUpdatedAt'?: Date | null;
    /**
    * Whether the job is confidential.
    */
    'confidential'?: boolean | null;
    'departments'?: Array<string>;
    'offices'?: Array<string>;
    'hiringManagers'?: Array<string>;
    'remoteData'?: Array<RemoteData> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "remoteId",
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
            "name": "status",
            "baseName": "status",
            "type": "JobStatusEnum"
        },
        {
            "name": "remoteCreatedAt",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "remoteUpdatedAt",
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
            "name": "hiringManagers",
            "baseName": "hiring_managers",
            "type": "Array<string>"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }    ];

    static getAttributeTypeMap() {
        return Job.attributeTypeMap;
    }
}
