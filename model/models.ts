import localVarRequest from 'request';

export * from './accessRoleEnum';
export * from './accountIntegration';
export * from './accountToken';
export * from './activity';
export * from './activityTypeEnum';
export * from './application';
export * from './applicationRequest';
export * from './attachment';
export * from './availableActions';
export * from './candidate';
export * from './candidateRequest';
export * from './dataPassthroughRequest';
export * from './department';
export * from './disabilityStatusEnum';
export * from './eEOC';
export * from './emailAddress';
export * from './emailAddressRequest';
export * from './emailAddressTypeEnum';
export * from './endUserDetailsRequest';
export * from './genderEnum';
export * from './generateRemoteKeyRequest';
export * from './job';
export * from './jobInterviewStage';
export * from './jobStatusEnum';
export * from './linkToken';
export * from './methodEnum';
export * from './modelOperation';
export * from './offer';
export * from './offerStatusEnum';
export * from './office';
export * from './overallRecommendationEnum';
export * from './paginatedActivityList';
export * from './paginatedApplicationList';
export * from './paginatedAttachmentList';
export * from './paginatedCandidateList';
export * from './paginatedDepartmentList';
export * from './paginatedEEOCList';
export * from './paginatedJobInterviewStageList';
export * from './paginatedJobList';
export * from './paginatedOfferList';
export * from './paginatedOfficeList';
export * from './paginatedRejectReasonList';
export * from './paginatedRemoteUserList';
export * from './paginatedScheduledInterviewList';
export * from './paginatedScorecardList';
export * from './paginatedTagList';
export * from './patchedApplicationRequest';
export * from './phoneNumber';
export * from './phoneNumberRequest';
export * from './phoneNumberTypeEnum';
export * from './raceEnum';
export * from './rejectReason';
export * from './remoteData';
export * from './remoteDataRequest';
export * from './remoteKey';
export * from './remoteKeyForRegenerationRequest';
export * from './remoteResponse';
export * from './remoteUser';
export * from './scheduledInterview';
export * from './scheduledInterviewStatusEnum';
export * from './scorecard';
export * from './syncStatus';
export * from './tag';
export * from './url';
export * from './urlRequest';
export * from './urlTypeEnum';
export * from './veteranStatusEnum';
export * from './visibilityEnum';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccessRoleEnum } from './accessRoleEnum';
import { AccountIntegration } from './accountIntegration';
import { AccountToken } from './accountToken';
import { Activity } from './activity';
import { ActivityTypeEnum } from './activityTypeEnum';
import { Application } from './application';
import { ApplicationRequest } from './applicationRequest';
import { Attachment } from './attachment';
import { AvailableActions } from './availableActions';
import { Candidate } from './candidate';
import { CandidateRequest } from './candidateRequest';
import { DataPassthroughRequest } from './dataPassthroughRequest';
import { Department } from './department';
import { DisabilityStatusEnum } from './disabilityStatusEnum';
import { EEOC } from './eEOC';
import { EmailAddress } from './emailAddress';
import { EmailAddressRequest } from './emailAddressRequest';
import { EmailAddressTypeEnum } from './emailAddressTypeEnum';
import { EndUserDetailsRequest } from './endUserDetailsRequest';
import { GenderEnum } from './genderEnum';
import { GenerateRemoteKeyRequest } from './generateRemoteKeyRequest';
import { Job } from './job';
import { JobInterviewStage } from './jobInterviewStage';
import { JobStatusEnum } from './jobStatusEnum';
import { LinkToken } from './linkToken';
import { MethodEnum } from './methodEnum';
import { ModelOperation } from './modelOperation';
import { Offer } from './offer';
import { OfferStatusEnum } from './offerStatusEnum';
import { Office } from './office';
import { OverallRecommendationEnum } from './overallRecommendationEnum';
import { PaginatedActivityList } from './paginatedActivityList';
import { PaginatedApplicationList } from './paginatedApplicationList';
import { PaginatedAttachmentList } from './paginatedAttachmentList';
import { PaginatedCandidateList } from './paginatedCandidateList';
import { PaginatedDepartmentList } from './paginatedDepartmentList';
import { PaginatedEEOCList } from './paginatedEEOCList';
import { PaginatedJobInterviewStageList } from './paginatedJobInterviewStageList';
import { PaginatedJobList } from './paginatedJobList';
import { PaginatedOfferList } from './paginatedOfferList';
import { PaginatedOfficeList } from './paginatedOfficeList';
import { PaginatedRejectReasonList } from './paginatedRejectReasonList';
import { PaginatedRemoteUserList } from './paginatedRemoteUserList';
import { PaginatedScheduledInterviewList } from './paginatedScheduledInterviewList';
import { PaginatedScorecardList } from './paginatedScorecardList';
import { PaginatedTagList } from './paginatedTagList';
import { PatchedApplicationRequest } from './patchedApplicationRequest';
import { PhoneNumber } from './phoneNumber';
import { PhoneNumberRequest } from './phoneNumberRequest';
import { PhoneNumberTypeEnum } from './phoneNumberTypeEnum';
import { RaceEnum } from './raceEnum';
import { RejectReason } from './rejectReason';
import { RemoteData } from './remoteData';
import { RemoteDataRequest } from './remoteDataRequest';
import { RemoteKey } from './remoteKey';
import { RemoteKeyForRegenerationRequest } from './remoteKeyForRegenerationRequest';
import { RemoteResponse } from './remoteResponse';
import { RemoteUser } from './remoteUser';
import { ScheduledInterview } from './scheduledInterview';
import { ScheduledInterviewStatusEnum } from './scheduledInterviewStatusEnum';
import { Scorecard } from './scorecard';
import { SyncStatus } from './syncStatus';
import { Tag } from './tag';
import { Url } from './url';
import { UrlRequest } from './urlRequest';
import { UrlTypeEnum } from './urlTypeEnum';
import { VeteranStatusEnum } from './veteranStatusEnum';
import { VisibilityEnum } from './visibilityEnum';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AccessRoleEnum": AccessRoleEnum,
        "AccountIntegration.CategoriesEnum": AccountIntegration.CategoriesEnum,
        "ActivityTypeEnum": ActivityTypeEnum,
        "DisabilityStatusEnum": DisabilityStatusEnum,
        "EmailAddressTypeEnum": EmailAddressTypeEnum,
        "EndUserDetailsRequest.CategoriesEnum": EndUserDetailsRequest.CategoriesEnum,
        "GenderEnum": GenderEnum,
        "JobStatusEnum": JobStatusEnum,
        "MethodEnum": MethodEnum,
        "OfferStatusEnum": OfferStatusEnum,
        "OverallRecommendationEnum": OverallRecommendationEnum,
        "PhoneNumberTypeEnum": PhoneNumberTypeEnum,
        "RaceEnum": RaceEnum,
        "ScheduledInterviewStatusEnum": ScheduledInterviewStatusEnum,
        "UrlTypeEnum": UrlTypeEnum,
        "VeteranStatusEnum": VeteranStatusEnum,
        "VisibilityEnum": VisibilityEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountIntegration": AccountIntegration,
    "AccountToken": AccountToken,
    "Activity": Activity,
    "Application": Application,
    "ApplicationRequest": ApplicationRequest,
    "Attachment": Attachment,
    "AvailableActions": AvailableActions,
    "Candidate": Candidate,
    "CandidateRequest": CandidateRequest,
    "DataPassthroughRequest": DataPassthroughRequest,
    "Department": Department,
    "EEOC": EEOC,
    "EmailAddress": EmailAddress,
    "EmailAddressRequest": EmailAddressRequest,
    "EndUserDetailsRequest": EndUserDetailsRequest,
    "GenerateRemoteKeyRequest": GenerateRemoteKeyRequest,
    "Job": Job,
    "JobInterviewStage": JobInterviewStage,
    "LinkToken": LinkToken,
    "ModelOperation": ModelOperation,
    "Offer": Offer,
    "Office": Office,
    "PaginatedActivityList": PaginatedActivityList,
    "PaginatedApplicationList": PaginatedApplicationList,
    "PaginatedAttachmentList": PaginatedAttachmentList,
    "PaginatedCandidateList": PaginatedCandidateList,
    "PaginatedDepartmentList": PaginatedDepartmentList,
    "PaginatedEEOCList": PaginatedEEOCList,
    "PaginatedJobInterviewStageList": PaginatedJobInterviewStageList,
    "PaginatedJobList": PaginatedJobList,
    "PaginatedOfferList": PaginatedOfferList,
    "PaginatedOfficeList": PaginatedOfficeList,
    "PaginatedRejectReasonList": PaginatedRejectReasonList,
    "PaginatedRemoteUserList": PaginatedRemoteUserList,
    "PaginatedScheduledInterviewList": PaginatedScheduledInterviewList,
    "PaginatedScorecardList": PaginatedScorecardList,
    "PaginatedTagList": PaginatedTagList,
    "PatchedApplicationRequest": PatchedApplicationRequest,
    "PhoneNumber": PhoneNumber,
    "PhoneNumberRequest": PhoneNumberRequest,
    "RejectReason": RejectReason,
    "RemoteData": RemoteData,
    "RemoteDataRequest": RemoteDataRequest,
    "RemoteKey": RemoteKey,
    "RemoteKeyForRegenerationRequest": RemoteKeyForRegenerationRequest,
    "RemoteResponse": RemoteResponse,
    "RemoteUser": RemoteUser,
    "ScheduledInterview": ScheduledInterview,
    "Scorecard": Scorecard,
    "SyncStatus": SyncStatus,
    "Tag": Tag,
    "Url": Url,
    "UrlRequest": UrlRequest,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
