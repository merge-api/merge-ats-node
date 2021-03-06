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
import { PhoneNumberTypeEnum } from './phoneNumberTypeEnum';

/**
* # The PhoneNumber Object ### Description The `PhoneNumber` object is used to represent a candidate\'s phone number. ### Usage Example Fetch from the `GET Candidate` endpoint and view their phone numbers.
*/
export class PhoneNumber {
    /**
    * The phone number.
    */
    'value'?: string | null;
    /**
    * The type of phone number.
    */
    'phone_number_type'?: PhoneNumberTypeEnum | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "phone_number_type",
            "baseName": "phone_number_type",
            "type": "PhoneNumberTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PhoneNumber.attributeTypeMap;
    }
}

