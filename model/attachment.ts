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
import { AttachmentTypeEnum } from './attachmentTypeEnum';
import { RemoteData } from './remoteData';

/**
* # The Attachment Object ### Description The `Attachment` object is used to represent a attachment for a candidate. ### Usage Example Fetch from the `LIST Attachments` endpoint and view attachments accessible by a company.
*/
export class Attachment {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    /**
    * The attachment\'s name.
    */
    'file_name'?: string | null;
    /**
    * The attachment\'s url.
    */
    'file_url'?: string | null;
    'candidate'?: string | null;
    /**
    * The attachment\'s type.
    */
    'attachment_type'?: AttachmentTypeEnum | null;
    'remote_data'?: Array<RemoteData> | null;
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
            "name": "file_name",
            "baseName": "file_name",
            "type": "string"
        },
        {
            "name": "file_url",
            "baseName": "file_url",
            "type": "string"
        },
        {
            "name": "candidate",
            "baseName": "candidate",
            "type": "string"
        },
        {
            "name": "attachment_type",
            "baseName": "attachment_type",
            "type": "AttachmentTypeEnum"
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
        return Attachment.attributeTypeMap;
    }
}

