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
import { AccessRoleEnum } from './accessRoleEnum';
import { RemoteData } from './remoteData';

/**
* # The RemoteUser Object ### Description The `RemoteUser` object is used to represent a third party user. ### Usage Example Fetch from the `LIST RemoteUsers` endpoint to show all users for a third party.
*/
export class RemoteUser {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    /**
    * The user\'s first name.
    */
    'first_name'?: string | null;
    /**
    * The user\'s last name.
    */
    'last_name'?: string | null;
    /**
    * The user\'s email.
    */
    'email'?: string | null;
    /**
    * Whether the user\'s account had been disabled.
    */
    'disabled'?: boolean | null;
    /**
    * When the third party\'s user was created.
    */
    'remote_created_at'?: Date | null;
    /**
    * The user\'s role.
    */
    'access_role'?: AccessRoleEnum | null;
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
            "name": "first_name",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "last_name",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean"
        },
        {
            "name": "remote_created_at",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "access_role",
            "baseName": "access_role",
            "type": "AccessRoleEnum"
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
        return RemoteUser.attributeTypeMap;
    }
}

