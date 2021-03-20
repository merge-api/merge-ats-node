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

export class EndUserDetailsRequest {
    'endUserEmailAddress': string;
    'endUserOrganizationName': string;
    'endUserOriginId': string;
    'categories': Array<EndUserDetailsRequest.CategoriesEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "endUserEmailAddress",
            "baseName": "end_user_email_address",
            "type": "string"
        },
        {
            "name": "endUserOrganizationName",
            "baseName": "end_user_organization_name",
            "type": "string"
        },
        {
            "name": "endUserOriginId",
            "baseName": "end_user_origin_id",
            "type": "string"
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<EndUserDetailsRequest.CategoriesEnum>"
        }    ];

    static getAttributeTypeMap() {
        return EndUserDetailsRequest.attributeTypeMap;
    }
}

export namespace EndUserDetailsRequest {
    export enum CategoriesEnum {
        Hris = <any> 'hris',
        Ats = <any> 'ats'
    }
}
