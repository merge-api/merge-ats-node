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

export enum AccessRoleEnumExpected {
    SuperAdmin = <any> 'SUPER_ADMIN',
    Admin = <any> 'ADMIN',
    TeamMember = <any> 'TEAM_MEMBER',
    LimitedTeamMember = <any> 'LIMITED_TEAM_MEMBER',
    Interviewer = <any> 'INTERVIEWER'
}

export type AccessRoleEnum = AccessRoleEnumExpected | string;
