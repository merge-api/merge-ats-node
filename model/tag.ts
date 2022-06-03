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
* # The Tag Object ### Description The `Tag` object is used to represent a tag for a candidate. ### Usage Example Fetch from the `LIST Tags` endpoint and view the tags used within a company.
*/
export class Tag {
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    /**
    * The tag\'s name.
    */
    'name'?: string | null;
    'remote_data'?: Array<{ [key: string]: any; }> | null;
    /**
    * Indicates whether or not this object has been deleted on the third-party.
    */
    'remote_was_deleted'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<{ [key: string]: any; }>"
        },
        {
            "name": "remote_was_deleted",
            "baseName": "remote_was_deleted",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Tag.attributeTypeMap;
    }
}

