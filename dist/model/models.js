"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./accessRoleEnum"), exports);
__exportStar(require("./accountDetails"), exports);
__exportStar(require("./accountDetailsAndActions"), exports);
__exportStar(require("./accountDetailsAndActionsIntegration"), exports);
__exportStar(require("./accountDetailsAndActionsStatusEnum"), exports);
__exportStar(require("./accountIntegration"), exports);
__exportStar(require("./accountToken"), exports);
__exportStar(require("./activity"), exports);
__exportStar(require("./activityTypeEnum"), exports);
__exportStar(require("./application"), exports);
__exportStar(require("./applicationEndpointRequest"), exports);
__exportStar(require("./applicationRequest"), exports);
__exportStar(require("./applicationResponse"), exports);
__exportStar(require("./attachment"), exports);
__exportStar(require("./attachmentEndpointRequest"), exports);
__exportStar(require("./attachmentRequest"), exports);
__exportStar(require("./attachmentResponse"), exports);
__exportStar(require("./attachmentTypeEnum"), exports);
__exportStar(require("./availableActions"), exports);
__exportStar(require("./candidate"), exports);
__exportStar(require("./candidateEndpointRequest"), exports);
__exportStar(require("./candidateRequest"), exports);
__exportStar(require("./candidateResponse"), exports);
__exportStar(require("./categoriesEnum"), exports);
__exportStar(require("./categoryEnum"), exports);
__exportStar(require("./dataPassthroughRequest"), exports);
__exportStar(require("./department"), exports);
__exportStar(require("./disabilityStatusEnum"), exports);
__exportStar(require("./eEOC"), exports);
__exportStar(require("./emailAddress"), exports);
__exportStar(require("./emailAddressRequest"), exports);
__exportStar(require("./emailAddressTypeEnum"), exports);
__exportStar(require("./endUserDetailsRequest"), exports);
__exportStar(require("./genderEnum"), exports);
__exportStar(require("./generateRemoteKeyRequest"), exports);
__exportStar(require("./issue"), exports);
__exportStar(require("./issueStatusEnum"), exports);
__exportStar(require("./job"), exports);
__exportStar(require("./jobInterviewStage"), exports);
__exportStar(require("./jobStatusEnum"), exports);
__exportStar(require("./linkToken"), exports);
__exportStar(require("./methodEnum"), exports);
__exportStar(require("./modelOperation"), exports);
__exportStar(require("./offer"), exports);
__exportStar(require("./offerStatusEnum"), exports);
__exportStar(require("./office"), exports);
__exportStar(require("./overallRecommendationEnum"), exports);
__exportStar(require("./paginatedAccountDetailsAndActionsList"), exports);
__exportStar(require("./paginatedActivityList"), exports);
__exportStar(require("./paginatedApplicationList"), exports);
__exportStar(require("./paginatedAttachmentList"), exports);
__exportStar(require("./paginatedCandidateList"), exports);
__exportStar(require("./paginatedDepartmentList"), exports);
__exportStar(require("./paginatedEEOCList"), exports);
__exportStar(require("./paginatedIssueList"), exports);
__exportStar(require("./paginatedJobInterviewStageList"), exports);
__exportStar(require("./paginatedJobList"), exports);
__exportStar(require("./paginatedOfferList"), exports);
__exportStar(require("./paginatedOfficeList"), exports);
__exportStar(require("./paginatedRejectReasonList"), exports);
__exportStar(require("./paginatedRemoteUserList"), exports);
__exportStar(require("./paginatedScheduledInterviewList"), exports);
__exportStar(require("./paginatedScorecardList"), exports);
__exportStar(require("./paginatedSyncStatusList"), exports);
__exportStar(require("./paginatedTagList"), exports);
__exportStar(require("./phoneNumber"), exports);
__exportStar(require("./phoneNumberRequest"), exports);
__exportStar(require("./phoneNumberTypeEnum"), exports);
__exportStar(require("./raceEnum"), exports);
__exportStar(require("./rejectReason"), exports);
__exportStar(require("./remoteData"), exports);
__exportStar(require("./remoteDataRequest"), exports);
__exportStar(require("./remoteKey"), exports);
__exportStar(require("./remoteKeyForRegenerationRequest"), exports);
__exportStar(require("./remoteResponse"), exports);
__exportStar(require("./remoteUser"), exports);
__exportStar(require("./requestFormatEnum"), exports);
__exportStar(require("./scheduledInterview"), exports);
__exportStar(require("./scheduledInterviewStatusEnum"), exports);
__exportStar(require("./scorecard"), exports);
__exportStar(require("./syncStatus"), exports);
__exportStar(require("./syncStatusStatusEnum"), exports);
__exportStar(require("./tag"), exports);
__exportStar(require("./url"), exports);
__exportStar(require("./urlRequest"), exports);
__exportStar(require("./urlTypeEnum"), exports);
__exportStar(require("./validationProblem"), exports);
__exportStar(require("./veteranStatusEnum"), exports);
__exportStar(require("./visibilityEnum"), exports);
var accessRoleEnum_1 = require("./accessRoleEnum");
var accountDetails_1 = require("./accountDetails");
var accountDetailsAndActions_1 = require("./accountDetailsAndActions");
var accountDetailsAndActionsIntegration_1 = require("./accountDetailsAndActionsIntegration");
var accountDetailsAndActionsStatusEnum_1 = require("./accountDetailsAndActionsStatusEnum");
var accountIntegration_1 = require("./accountIntegration");
var accountToken_1 = require("./accountToken");
var activity_1 = require("./activity");
var activityTypeEnum_1 = require("./activityTypeEnum");
var application_1 = require("./application");
var applicationEndpointRequest_1 = require("./applicationEndpointRequest");
var applicationRequest_1 = require("./applicationRequest");
var applicationResponse_1 = require("./applicationResponse");
var attachment_1 = require("./attachment");
var attachmentEndpointRequest_1 = require("./attachmentEndpointRequest");
var attachmentRequest_1 = require("./attachmentRequest");
var attachmentResponse_1 = require("./attachmentResponse");
var attachmentTypeEnum_1 = require("./attachmentTypeEnum");
var availableActions_1 = require("./availableActions");
var candidate_1 = require("./candidate");
var candidateEndpointRequest_1 = require("./candidateEndpointRequest");
var candidateRequest_1 = require("./candidateRequest");
var candidateResponse_1 = require("./candidateResponse");
var categoriesEnum_1 = require("./categoriesEnum");
var categoryEnum_1 = require("./categoryEnum");
var dataPassthroughRequest_1 = require("./dataPassthroughRequest");
var department_1 = require("./department");
var disabilityStatusEnum_1 = require("./disabilityStatusEnum");
var eEOC_1 = require("./eEOC");
var emailAddress_1 = require("./emailAddress");
var emailAddressRequest_1 = require("./emailAddressRequest");
var emailAddressTypeEnum_1 = require("./emailAddressTypeEnum");
var endUserDetailsRequest_1 = require("./endUserDetailsRequest");
var genderEnum_1 = require("./genderEnum");
var generateRemoteKeyRequest_1 = require("./generateRemoteKeyRequest");
var issue_1 = require("./issue");
var issueStatusEnum_1 = require("./issueStatusEnum");
var job_1 = require("./job");
var jobInterviewStage_1 = require("./jobInterviewStage");
var jobStatusEnum_1 = require("./jobStatusEnum");
var linkToken_1 = require("./linkToken");
var methodEnum_1 = require("./methodEnum");
var modelOperation_1 = require("./modelOperation");
var offer_1 = require("./offer");
var offerStatusEnum_1 = require("./offerStatusEnum");
var office_1 = require("./office");
var overallRecommendationEnum_1 = require("./overallRecommendationEnum");
var paginatedAccountDetailsAndActionsList_1 = require("./paginatedAccountDetailsAndActionsList");
var paginatedActivityList_1 = require("./paginatedActivityList");
var paginatedApplicationList_1 = require("./paginatedApplicationList");
var paginatedAttachmentList_1 = require("./paginatedAttachmentList");
var paginatedCandidateList_1 = require("./paginatedCandidateList");
var paginatedDepartmentList_1 = require("./paginatedDepartmentList");
var paginatedEEOCList_1 = require("./paginatedEEOCList");
var paginatedIssueList_1 = require("./paginatedIssueList");
var paginatedJobInterviewStageList_1 = require("./paginatedJobInterviewStageList");
var paginatedJobList_1 = require("./paginatedJobList");
var paginatedOfferList_1 = require("./paginatedOfferList");
var paginatedOfficeList_1 = require("./paginatedOfficeList");
var paginatedRejectReasonList_1 = require("./paginatedRejectReasonList");
var paginatedRemoteUserList_1 = require("./paginatedRemoteUserList");
var paginatedScheduledInterviewList_1 = require("./paginatedScheduledInterviewList");
var paginatedScorecardList_1 = require("./paginatedScorecardList");
var paginatedSyncStatusList_1 = require("./paginatedSyncStatusList");
var paginatedTagList_1 = require("./paginatedTagList");
var phoneNumber_1 = require("./phoneNumber");
var phoneNumberRequest_1 = require("./phoneNumberRequest");
var phoneNumberTypeEnum_1 = require("./phoneNumberTypeEnum");
var raceEnum_1 = require("./raceEnum");
var rejectReason_1 = require("./rejectReason");
var remoteData_1 = require("./remoteData");
var remoteDataRequest_1 = require("./remoteDataRequest");
var remoteKey_1 = require("./remoteKey");
var remoteKeyForRegenerationRequest_1 = require("./remoteKeyForRegenerationRequest");
var remoteResponse_1 = require("./remoteResponse");
var remoteUser_1 = require("./remoteUser");
var requestFormatEnum_1 = require("./requestFormatEnum");
var scheduledInterview_1 = require("./scheduledInterview");
var scheduledInterviewStatusEnum_1 = require("./scheduledInterviewStatusEnum");
var scorecard_1 = require("./scorecard");
var syncStatus_1 = require("./syncStatus");
var syncStatusStatusEnum_1 = require("./syncStatusStatusEnum");
var tag_1 = require("./tag");
var url_1 = require("./url");
var urlRequest_1 = require("./urlRequest");
var urlTypeEnum_1 = require("./urlTypeEnum");
var validationProblem_1 = require("./validationProblem");
var veteranStatusEnum_1 = require("./veteranStatusEnum");
var visibilityEnum_1 = require("./visibilityEnum");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "AccessRoleEnum": accessRoleEnum_1.AccessRoleEnum,
    "AccountDetailsAndActionsStatusEnum": accountDetailsAndActionsStatusEnum_1.AccountDetailsAndActionsStatusEnum,
    "ActivityTypeEnum": activityTypeEnum_1.ActivityTypeEnum,
    "AttachmentTypeEnum": attachmentTypeEnum_1.AttachmentTypeEnum,
    "CategoriesEnum": categoriesEnum_1.CategoriesEnum,
    "CategoryEnum": categoryEnum_1.CategoryEnum,
    "DisabilityStatusEnum": disabilityStatusEnum_1.DisabilityStatusEnum,
    "EmailAddressTypeEnum": emailAddressTypeEnum_1.EmailAddressTypeEnum,
    "GenderEnum": genderEnum_1.GenderEnum,
    "IssueStatusEnum": issueStatusEnum_1.IssueStatusEnum,
    "JobStatusEnum": jobStatusEnum_1.JobStatusEnum,
    "MethodEnum": methodEnum_1.MethodEnum,
    "OfferStatusEnum": offerStatusEnum_1.OfferStatusEnum,
    "OverallRecommendationEnum": overallRecommendationEnum_1.OverallRecommendationEnum,
    "PhoneNumberTypeEnum": phoneNumberTypeEnum_1.PhoneNumberTypeEnum,
    "RaceEnum": raceEnum_1.RaceEnum,
    "RequestFormatEnum": requestFormatEnum_1.RequestFormatEnum,
    "ScheduledInterviewStatusEnum": scheduledInterviewStatusEnum_1.ScheduledInterviewStatusEnum,
    "SyncStatusStatusEnum": syncStatusStatusEnum_1.SyncStatusStatusEnum,
    "UrlTypeEnum": urlTypeEnum_1.UrlTypeEnum,
    "VeteranStatusEnum": veteranStatusEnum_1.VeteranStatusEnum,
    "VisibilityEnum": visibilityEnum_1.VisibilityEnum,
};
var typeMap = {
    "AccountDetails": accountDetails_1.AccountDetails,
    "AccountDetailsAndActions": accountDetailsAndActions_1.AccountDetailsAndActions,
    "AccountDetailsAndActionsIntegration": accountDetailsAndActionsIntegration_1.AccountDetailsAndActionsIntegration,
    "AccountIntegration": accountIntegration_1.AccountIntegration,
    "AccountToken": accountToken_1.AccountToken,
    "Activity": activity_1.Activity,
    "Application": application_1.Application,
    "ApplicationEndpointRequest": applicationEndpointRequest_1.ApplicationEndpointRequest,
    "ApplicationRequest": applicationRequest_1.ApplicationRequest,
    "ApplicationResponse": applicationResponse_1.ApplicationResponse,
    "Attachment": attachment_1.Attachment,
    "AttachmentEndpointRequest": attachmentEndpointRequest_1.AttachmentEndpointRequest,
    "AttachmentRequest": attachmentRequest_1.AttachmentRequest,
    "AttachmentResponse": attachmentResponse_1.AttachmentResponse,
    "AvailableActions": availableActions_1.AvailableActions,
    "Candidate": candidate_1.Candidate,
    "CandidateEndpointRequest": candidateEndpointRequest_1.CandidateEndpointRequest,
    "CandidateRequest": candidateRequest_1.CandidateRequest,
    "CandidateResponse": candidateResponse_1.CandidateResponse,
    "DataPassthroughRequest": dataPassthroughRequest_1.DataPassthroughRequest,
    "Department": department_1.Department,
    "EEOC": eEOC_1.EEOC,
    "EmailAddress": emailAddress_1.EmailAddress,
    "EmailAddressRequest": emailAddressRequest_1.EmailAddressRequest,
    "EndUserDetailsRequest": endUserDetailsRequest_1.EndUserDetailsRequest,
    "GenerateRemoteKeyRequest": generateRemoteKeyRequest_1.GenerateRemoteKeyRequest,
    "Issue": issue_1.Issue,
    "Job": job_1.Job,
    "JobInterviewStage": jobInterviewStage_1.JobInterviewStage,
    "LinkToken": linkToken_1.LinkToken,
    "ModelOperation": modelOperation_1.ModelOperation,
    "Offer": offer_1.Offer,
    "Office": office_1.Office,
    "PaginatedAccountDetailsAndActionsList": paginatedAccountDetailsAndActionsList_1.PaginatedAccountDetailsAndActionsList,
    "PaginatedActivityList": paginatedActivityList_1.PaginatedActivityList,
    "PaginatedApplicationList": paginatedApplicationList_1.PaginatedApplicationList,
    "PaginatedAttachmentList": paginatedAttachmentList_1.PaginatedAttachmentList,
    "PaginatedCandidateList": paginatedCandidateList_1.PaginatedCandidateList,
    "PaginatedDepartmentList": paginatedDepartmentList_1.PaginatedDepartmentList,
    "PaginatedEEOCList": paginatedEEOCList_1.PaginatedEEOCList,
    "PaginatedIssueList": paginatedIssueList_1.PaginatedIssueList,
    "PaginatedJobInterviewStageList": paginatedJobInterviewStageList_1.PaginatedJobInterviewStageList,
    "PaginatedJobList": paginatedJobList_1.PaginatedJobList,
    "PaginatedOfferList": paginatedOfferList_1.PaginatedOfferList,
    "PaginatedOfficeList": paginatedOfficeList_1.PaginatedOfficeList,
    "PaginatedRejectReasonList": paginatedRejectReasonList_1.PaginatedRejectReasonList,
    "PaginatedRemoteUserList": paginatedRemoteUserList_1.PaginatedRemoteUserList,
    "PaginatedScheduledInterviewList": paginatedScheduledInterviewList_1.PaginatedScheduledInterviewList,
    "PaginatedScorecardList": paginatedScorecardList_1.PaginatedScorecardList,
    "PaginatedSyncStatusList": paginatedSyncStatusList_1.PaginatedSyncStatusList,
    "PaginatedTagList": paginatedTagList_1.PaginatedTagList,
    "PhoneNumber": phoneNumber_1.PhoneNumber,
    "PhoneNumberRequest": phoneNumberRequest_1.PhoneNumberRequest,
    "RejectReason": rejectReason_1.RejectReason,
    "RemoteData": remoteData_1.RemoteData,
    "RemoteDataRequest": remoteDataRequest_1.RemoteDataRequest,
    "RemoteKey": remoteKey_1.RemoteKey,
    "RemoteKeyForRegenerationRequest": remoteKeyForRegenerationRequest_1.RemoteKeyForRegenerationRequest,
    "RemoteResponse": remoteResponse_1.RemoteResponse,
    "RemoteUser": remoteUser_1.RemoteUser,
    "ScheduledInterview": scheduledInterview_1.ScheduledInterview,
    "Scorecard": scorecard_1.Scorecard,
    "SyncStatus": syncStatus_1.SyncStatus,
    "Tag": tag_1.Tag,
    "Url": url_1.Url,
    "UrlRequest": urlRequest_1.UrlRequest,
    "ValidationProblem": validationProblem_1.ValidationProblem,
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var HttpBearerAuth = (function () {
    function HttpBearerAuth() {
        this.accessToken = '';
    }
    HttpBearerAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            var accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    };
    return HttpBearerAuth;
}());
exports.HttpBearerAuth = HttpBearerAuth;
var ApiKeyAuth = (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map