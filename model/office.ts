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

/**
* # The Office Object ### Description The `Office` object is used to represent an office within a company. ### Usage Example Fetch from the `LIST Offices` endpoint and view the offices within a company.
*/
export class Office {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    /**
    * The office\'s name.
    */
    'name'?: string | null;
    /**
    * The office\'s location.
    */
    'location'?: string | null;
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
            "name": "location",
            "baseName": "location",
            "type": "string"
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
        return Office.attributeTypeMap;
    }
}

