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
import { CategoriesEnum } from './categoriesEnum';

export class EndUserDetailsRequest {
    /**
    * Unique ID for your end user.
    */
    'end_user_email_address': string;
    /**
    * Your end user\'s organization.
    */
    'end_user_organization_name': string;
    /**
    * Your end user\'s email address.
    */
    'end_user_origin_id': string;
    /**
    * The integration categories to show in Merge Link.
    */
    'categories': Array<CategoriesEnum>;
    /**
    * The slug of a specific pre-selected integration for this linking flow token. For examples of slugs, see https://www.merge.dev/docs/basics/integration-metadata/.
    */
    'integration'?: string | null;
    /**
    * An integer number of minutes between [30, 720 or 10080 if for a Magic Link URL] for how long this token is valid. Defaults to 30.
    */
    'link_expiry_mins'?: number;
    /**
    * Whether to generate a Magic Link URL. Defaults to false. For more information on Magic Link, see https://merge.dev/blog/product/integrations,-fast.-say-hello-to-magic-link/.
    */
    'should_create_magic_link_url'?: boolean | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "end_user_email_address",
            "baseName": "end_user_email_address",
            "type": "string"
        },
        {
            "name": "end_user_organization_name",
            "baseName": "end_user_organization_name",
            "type": "string"
        },
        {
            "name": "end_user_origin_id",
            "baseName": "end_user_origin_id",
            "type": "string"
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<CategoriesEnum>"
        },
        {
            "name": "integration",
            "baseName": "integration",
            "type": "string"
        },
        {
            "name": "link_expiry_mins",
            "baseName": "link_expiry_mins",
            "type": "number"
        },
        {
            "name": "should_create_magic_link_url",
            "baseName": "should_create_magic_link_url",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return EndUserDetailsRequest.attributeTypeMap;
    }
}

