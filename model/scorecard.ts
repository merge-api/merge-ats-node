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
* # The Scorecard Object ### Description The `Scorecard` object is used to represent a Scorecard for an interview  ### Usage Example Fetch from the `LIST Scorecards` endpoint and filter by `application` to show all scorecard for an applicant.
*/
export class Scorecard {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remoteId'?: string | null;
    /**
    * The application being scored.
    */
    'application'?: string | null;
    /**
    * The interview being scored.
    */
    'interview'?: string | null;
    /**
    * The interviewer doing the scoring.
    */
    'interviewer'?: string | null;
    /**
    * When the third party\'s scorecard was created.
    */
    'remoteCreatedAt'?: Date | null;
    /**
    * When the scorecard was submitted.
    */
    'submittedAt'?: Date | null;
    /**
    * The inteviewer\'s recommendation.
    */
    'overallRecommendation'?: OverallRecommendationEnum | null;
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
            "name": "remoteCreatedAt",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "submittedAt",
            "baseName": "submitted_at",
            "type": "Date"
        },
        {
            "name": "overallRecommendation",
            "baseName": "overall_recommendation",
            "type": "OverallRecommendationEnum"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }    ];

    static getAttributeTypeMap() {
        return Scorecard.attributeTypeMap;
    }
}

