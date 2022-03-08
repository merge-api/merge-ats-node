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
import { OverallRecommendationEnum } from './overallRecommendationEnum';
import { RemoteData } from './remoteData';

/**
* # The Scorecard Object ### Description The `Scorecard` object is used to represent a Scorecard for an interview ### Usage Example Fetch from the `LIST Scorecards` endpoint and filter by `application` to show all scorecard for an applicant.
*/
export class Scorecard {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    'application'?: string | null;
    'interview'?: string | null;
    'interviewer'?: string | null;
    /**
    * When the third party\'s scorecard was created.
    */
    'remote_created_at'?: Date | null;
    /**
    * When the scorecard was submitted.
    */
    'submitted_at'?: Date | null;
    /**
    * The inteviewer\'s recommendation.
    */
    'overall_recommendation'?: OverallRecommendationEnum | null;
    'remote_data'?: Array<RemoteData> | null;

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
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
        {
            "name": "interview",
            "baseName": "interview",
            "type": "string"
        },
        {
            "name": "interviewer",
            "baseName": "interviewer",
            "type": "string"
        },
        {
            "name": "remote_created_at",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "submitted_at",
            "baseName": "submitted_at",
            "type": "Date"
        },
        {
            "name": "overall_recommendation",
            "baseName": "overall_recommendation",
            "type": "OverallRecommendationEnum"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }    ];

    static getAttributeTypeMap() {
        return Scorecard.attributeTypeMap;
    }
}

