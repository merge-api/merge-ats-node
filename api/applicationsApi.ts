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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { Application } from '../model/application';
import { ApplicationEndpointRequest } from '../model/applicationEndpointRequest';
import { ApplicationResponse } from '../model/applicationResponse';
import { MetaResponse } from '../model/metaResponse';
import { PaginatedApplicationList } from '../model/paginatedApplicationList';
import { UpdateApplicationStageRequest } from '../model/updateApplicationStageRequest';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.merge.dev/api/ats/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ApplicationsApiApiKeys {
    tokenAuth,
}

export class ApplicationsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuth': new ApiKeyAuth('header', 'Authorization'),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: ApplicationsApiApiKeys, value: string) {
        (this.authentications as any)[ApplicationsApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Updates the `current_stage` field of an `Application` object
     * @param xAccountToken Token identifying the end user.
     * @param id 
     * @param isDebugMode Whether to include debug fields (such as log file links) in the response.
     * @param runAsync Whether or not third-party updates should be run asynchronously.
     * @param updateApplicationStageRequest 
     */
    public async applicationsChangeStageCreate (xAccountToken: string, id: string, isDebugMode?: boolean, runAsync?: boolean, updateApplicationStageRequest?: UpdateApplicationStageRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ApplicationResponse;  }> {
        const localVarPath = this.basePath + '/applications/{id}/change-stage'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'xAccountToken' is not null or undefined
        if (xAccountToken === null || xAccountToken === undefined) {
            throw new Error('Required parameter xAccountToken was null or undefined when calling applicationsChangeStageCreate.');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling applicationsChangeStageCreate.');
        }

        if (isDebugMode !== undefined) {
            localVarQueryParameters['is_debug_mode'] = ObjectSerializer.serialize(isDebugMode, "boolean");
        }

        if (runAsync !== undefined) {
            localVarQueryParameters['run_async'] = ObjectSerializer.serialize(runAsync, "boolean");
        }

        localVarHeaderParams['X-Account-Token'] = ObjectSerializer.serialize(xAccountToken, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateApplicationStageRequest, "UpdateApplicationStageRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.tokenAuth.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.tokenAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ApplicationResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ApplicationResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Creates an `Application` object with the given values.
     * @param xAccountToken Token identifying the end user.
     * @param applicationEndpointRequest 
     * @param isDebugMode Whether to include debug fields (such as log file links) in the response.
     * @param runAsync Whether or not third-party updates should be run asynchronously.
     */
    public async applicationsCreate (xAccountToken: string, applicationEndpointRequest: ApplicationEndpointRequest, isDebugMode?: boolean, runAsync?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ApplicationResponse;  }> {
        const localVarPath = this.basePath + '/applications';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'xAccountToken' is not null or undefined
        if (xAccountToken === null || xAccountToken === undefined) {
            throw new Error('Required parameter xAccountToken was null or undefined when calling applicationsCreate.');
        }

        // verify required parameter 'applicationEndpointRequest' is not null or undefined
        if (applicationEndpointRequest === null || applicationEndpointRequest === undefined) {
            throw new Error('Required parameter applicationEndpointRequest was null or undefined when calling applicationsCreate.');
        }

        if (isDebugMode !== undefined) {
            localVarQueryParameters['is_debug_mode'] = ObjectSerializer.serialize(isDebugMode, "boolean");
        }

        if (runAsync !== undefined) {
            localVarQueryParameters['run_async'] = ObjectSerializer.serialize(runAsync, "boolean");
        }

        localVarHeaderParams['X-Account-Token'] = ObjectSerializer.serialize(xAccountToken, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(applicationEndpointRequest, "ApplicationEndpointRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.tokenAuth.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.tokenAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ApplicationResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ApplicationResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns a list of `Application` objects.
     * @param xAccountToken Token identifying the end user.
     * @param candidateId If provided, will only return applications for this candidate.
     * @param createdAfter If provided, will only return objects created after this datetime.
     * @param createdBefore If provided, will only return objects created before this datetime.
     * @param creditedToId If provided, will only return applications credited to this user.
     * @param currentStageId If provided, will only return applications at this interview stage.
     * @param cursor The pagination cursor value.
     * @param expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param includeDeletedData Whether to include data that was marked as deleted by third party webhooks.
     * @param includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param jobId If provided, will only return applications for this job.
     * @param modifiedAfter If provided, will only return objects modified after this datetime.
     * @param modifiedBefore If provided, will only return objects modified before this datetime.
     * @param pageSize Number of results to return per page.
     * @param rejectReasonId If provided, will only return applications with this reject reason.
     * @param remoteId The API provider\&#39;s ID for the given object.
     * @param source If provided, will only return applications with this source.
     */
    public async applicationsList (xAccountToken: string, candidateId?: string, createdAfter?: Date, createdBefore?: Date, creditedToId?: string, currentStageId?: string, cursor?: string, expand?: 'candidate' | 'candidate,credited_to' | 'candidate,credited_to,current_stage' | 'candidate,credited_to,current_stage,reject_reason' | 'candidate,credited_to,reject_reason' | 'candidate,current_stage' | 'candidate,current_stage,reject_reason' | 'candidate,job' | 'candidate,job,credited_to' | 'candidate,job,credited_to,current_stage' | 'candidate,job,credited_to,current_stage,reject_reason' | 'candidate,job,credited_to,reject_reason' | 'candidate,job,current_stage' | 'candidate,job,current_stage,reject_reason' | 'candidate,job,reject_reason' | 'candidate,reject_reason' | 'credited_to' | 'credited_to,current_stage' | 'credited_to,current_stage,reject_reason' | 'credited_to,reject_reason' | 'current_stage' | 'current_stage,reject_reason' | 'job' | 'job,credited_to' | 'job,credited_to,current_stage' | 'job,credited_to,current_stage,reject_reason' | 'job,credited_to,reject_reason' | 'job,current_stage' | 'job,current_stage,reject_reason' | 'job,reject_reason' | 'reject_reason', includeDeletedData?: boolean, includeRemoteData?: boolean, jobId?: string, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, rejectReasonId?: string, remoteId?: string, source?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PaginatedApplicationList;  }> {
        const localVarPath = this.basePath + '/applications';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'xAccountToken' is not null or undefined
        if (xAccountToken === null || xAccountToken === undefined) {
            throw new Error('Required parameter xAccountToken was null or undefined when calling applicationsList.');
        }

        if (candidateId !== undefined) {
            localVarQueryParameters['candidate_id'] = ObjectSerializer.serialize(candidateId, "string");
        }

        if (createdAfter !== undefined) {
            localVarQueryParameters['created_after'] = ObjectSerializer.serialize(createdAfter, "Date");
        }

        if (createdBefore !== undefined) {
            localVarQueryParameters['created_before'] = ObjectSerializer.serialize(createdBefore, "Date");
        }

        if (creditedToId !== undefined) {
            localVarQueryParameters['credited_to_id'] = ObjectSerializer.serialize(creditedToId, "string");
        }

        if (currentStageId !== undefined) {
            localVarQueryParameters['current_stage_id'] = ObjectSerializer.serialize(currentStageId, "string");
        }

        if (cursor !== undefined) {
            localVarQueryParameters['cursor'] = ObjectSerializer.serialize(cursor, "string");
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "'candidate' | 'candidate,credited_to' | 'candidate,credited_to,current_stage' | 'candidate,credited_to,current_stage,reject_reason' | 'candidate,credited_to,reject_reason' | 'candidate,current_stage' | 'candidate,current_stage,reject_reason' | 'candidate,job' | 'candidate,job,credited_to' | 'candidate,job,credited_to,current_stage' | 'candidate,job,credited_to,current_stage,reject_reason' | 'candidate,job,credited_to,reject_reason' | 'candidate,job,current_stage' | 'candidate,job,current_stage,reject_reason' | 'candidate,job,reject_reason' | 'candidate,reject_reason' | 'credited_to' | 'credited_to,current_stage' | 'credited_to,current_stage,reject_reason' | 'credited_to,reject_reason' | 'current_stage' | 'current_stage,reject_reason' | 'job' | 'job,credited_to' | 'job,credited_to,current_stage' | 'job,credited_to,current_stage,reject_reason' | 'job,credited_to,reject_reason' | 'job,current_stage' | 'job,current_stage,reject_reason' | 'job,reject_reason' | 'reject_reason'");
        }

        if (includeDeletedData !== undefined) {
            localVarQueryParameters['include_deleted_data'] = ObjectSerializer.serialize(includeDeletedData, "boolean");
        }

        if (includeRemoteData !== undefined) {
            localVarQueryParameters['include_remote_data'] = ObjectSerializer.serialize(includeRemoteData, "boolean");
        }

        if (jobId !== undefined) {
            localVarQueryParameters['job_id'] = ObjectSerializer.serialize(jobId, "string");
        }

        if (modifiedAfter !== undefined) {
            localVarQueryParameters['modified_after'] = ObjectSerializer.serialize(modifiedAfter, "Date");
        }

        if (modifiedBefore !== undefined) {
            localVarQueryParameters['modified_before'] = ObjectSerializer.serialize(modifiedBefore, "Date");
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['page_size'] = ObjectSerializer.serialize(pageSize, "number");
        }

        if (rejectReasonId !== undefined) {
            localVarQueryParameters['reject_reason_id'] = ObjectSerializer.serialize(rejectReasonId, "string");
        }

        if (remoteId !== undefined) {
            localVarQueryParameters['remote_id'] = ObjectSerializer.serialize(remoteId, "string");
        }

        if (source !== undefined) {
            localVarQueryParameters['source'] = ObjectSerializer.serialize(source, "string");
        }

        localVarHeaderParams['X-Account-Token'] = ObjectSerializer.serialize(xAccountToken, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.tokenAuth.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.tokenAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PaginatedApplicationList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PaginatedApplicationList");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns metadata for `Application` POSTs.
     * @param xAccountToken Token identifying the end user.
     * @param applicationRemoteTemplateId The template ID associated with the nested application in the request.
     */
    public async applicationsMetaPostRetrieve (xAccountToken: string, applicationRemoteTemplateId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: MetaResponse;  }> {
        const localVarPath = this.basePath + '/applications/meta/post';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'xAccountToken' is not null or undefined
        if (xAccountToken === null || xAccountToken === undefined) {
            throw new Error('Required parameter xAccountToken was null or undefined when calling applicationsMetaPostRetrieve.');
        }

        if (applicationRemoteTemplateId !== undefined) {
            localVarQueryParameters['application_remote_template_id'] = ObjectSerializer.serialize(applicationRemoteTemplateId, "string");
        }

        localVarHeaderParams['X-Account-Token'] = ObjectSerializer.serialize(xAccountToken, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.tokenAuth.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.tokenAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: MetaResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "MetaResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns an `Application` object with the given `id`.
     * @param xAccountToken Token identifying the end user.
     * @param id 
     * @param expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    public async applicationsRetrieve (xAccountToken: string, id: string, expand?: 'candidate' | 'candidate,credited_to' | 'candidate,credited_to,current_stage' | 'candidate,credited_to,current_stage,reject_reason' | 'candidate,credited_to,reject_reason' | 'candidate,current_stage' | 'candidate,current_stage,reject_reason' | 'candidate,job' | 'candidate,job,credited_to' | 'candidate,job,credited_to,current_stage' | 'candidate,job,credited_to,current_stage,reject_reason' | 'candidate,job,credited_to,reject_reason' | 'candidate,job,current_stage' | 'candidate,job,current_stage,reject_reason' | 'candidate,job,reject_reason' | 'candidate,reject_reason' | 'credited_to' | 'credited_to,current_stage' | 'credited_to,current_stage,reject_reason' | 'credited_to,reject_reason' | 'current_stage' | 'current_stage,reject_reason' | 'job' | 'job,credited_to' | 'job,credited_to,current_stage' | 'job,credited_to,current_stage,reject_reason' | 'job,credited_to,reject_reason' | 'job,current_stage' | 'job,current_stage,reject_reason' | 'job,reject_reason' | 'reject_reason', includeRemoteData?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Application;  }> {
        const localVarPath = this.basePath + '/applications/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'xAccountToken' is not null or undefined
        if (xAccountToken === null || xAccountToken === undefined) {
            throw new Error('Required parameter xAccountToken was null or undefined when calling applicationsRetrieve.');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling applicationsRetrieve.');
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "'candidate' | 'candidate,credited_to' | 'candidate,credited_to,current_stage' | 'candidate,credited_to,current_stage,reject_reason' | 'candidate,credited_to,reject_reason' | 'candidate,current_stage' | 'candidate,current_stage,reject_reason' | 'candidate,job' | 'candidate,job,credited_to' | 'candidate,job,credited_to,current_stage' | 'candidate,job,credited_to,current_stage,reject_reason' | 'candidate,job,credited_to,reject_reason' | 'candidate,job,current_stage' | 'candidate,job,current_stage,reject_reason' | 'candidate,job,reject_reason' | 'candidate,reject_reason' | 'credited_to' | 'credited_to,current_stage' | 'credited_to,current_stage,reject_reason' | 'credited_to,reject_reason' | 'current_stage' | 'current_stage,reject_reason' | 'job' | 'job,credited_to' | 'job,credited_to,current_stage' | 'job,credited_to,current_stage,reject_reason' | 'job,credited_to,reject_reason' | 'job,current_stage' | 'job,current_stage,reject_reason' | 'job,reject_reason' | 'reject_reason'");
        }

        if (includeRemoteData !== undefined) {
            localVarQueryParameters['include_remote_data'] = ObjectSerializer.serialize(includeRemoteData, "boolean");
        }

        localVarHeaderParams['X-Account-Token'] = ObjectSerializer.serialize(xAccountToken, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.tokenAuth.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.tokenAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Application;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Application");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
