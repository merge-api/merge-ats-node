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
* # The Attachment Object ### Description The `Attachment` object is used to represent a attachment for a candidate.  ### Usage Example Fetch from the `LIST Attachments` endpoint and view attachments accessible by a company.
*/
export class Attachment {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remoteId'?: string | null;
    /**
    * The attachment\'s name.
    */
    'fileName'?: string | null;
    /**
    * The attachment\'s url.
    */
    'fileUrl'?: string | null;
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
            "name": "fileName",
            "baseName": "file_name",
            "type": "string"
        },
        {
            "name": "fileUrl",
            "baseName": "file_url",
            "type": "string"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }    ];

    static getAttributeTypeMap() {
        return Attachment.attributeTypeMap;
    }
}
