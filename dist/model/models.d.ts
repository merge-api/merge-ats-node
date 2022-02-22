/// <reference types="node" />
import localVarRequest from 'request';
export * from './accessRoleEnum';
export * from './accountDetails';
export * from './accountDetailsAndActions';
export * from './accountDetailsAndActionsIntegration';
export * from './accountDetailsAndActionsStatusEnum';
export * from './accountIntegration';
export * from './accountToken';
export * from './activity';
export * from './activityTypeEnum';
export * from './application';
export * from './applicationEndpointRequest';
export * from './applicationRequest';
export * from './applicationResponse';
export * from './attachment';
export * from './attachmentEndpointRequest';
export * from './attachmentRequest';
export * from './attachmentResponse';
export * from './attachmentTypeEnum';
export * from './availableActions';
export * from './candidate';
export * from './candidateEndpointRequest';
export * from './candidateRequest';
export * from './candidateResponse';
export * from './categoriesEnum';
export * from './categoryEnum';
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
export * from './issue';
export * from './issueStatusEnum';
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
export * from './paginatedAccountDetailsAndActionsList';
export * from './paginatedActivityList';
export * from './paginatedApplicationList';
export * from './paginatedAttachmentList';
export * from './paginatedCandidateList';
export * from './paginatedDepartmentList';
export * from './paginatedEEOCList';
export * from './paginatedIssueList';
export * from './paginatedJobInterviewStageList';
export * from './paginatedJobList';
export * from './paginatedOfferList';
export * from './paginatedOfficeList';
export * from './paginatedRejectReasonList';
export * from './paginatedRemoteUserList';
export * from './paginatedScheduledInterviewList';
export * from './paginatedScorecardList';
export * from './paginatedSyncStatusList';
export * from './paginatedTagList';
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
export * from './requestFormatEnum';
export * from './scheduledInterview';
export * from './scheduledInterviewStatusEnum';
export * from './scorecard';
export * from './syncStatus';
export * from './syncStatusStatusEnum';
export * from './tag';
export * from './url';
export * from './urlRequest';
export * from './urlTypeEnum';
export * from './validationProblem';
export * from './veteranStatusEnum';
export * from './visibilityEnum';
import * as fs from 'fs';
export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    };
}
export declare type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBearerAuth implements Authentication {
    accessToken: string | (() => string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
export declare type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
