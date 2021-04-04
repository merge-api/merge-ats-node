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
* # The SyncStatus Object ### Description The `SyncStatus` object is used to represent the syncing state of an account  ### Usage Example View the `SyncStatus` for an account to see how recently its models were synced.
*/
export class SyncStatus {
    'modelName': string;
    'modelId': string;
    'lastSyncStart': Date;
    'nextSyncStart': Date;
    'status': string;
    'isInitialSync': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "modelName",
            "baseName": "model_name",
            "type": "string"
        },
        {
            "name": "modelId",
            "baseName": "model_id",
            "type": "string"
        },
        {
            "name": "lastSyncStart",
            "baseName": "last_sync_start",
            "type": "Date"
        },
        {
            "name": "nextSyncStart",
            "baseName": "next_sync_start",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "isInitialSync",
            "baseName": "is_initial_sync",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return SyncStatus.attributeTypeMap;
    }
}

