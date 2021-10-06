/// <reference types="node" />
import http from 'http';
import { Application } from '../model/application';
import { ApplicationRequest } from '../model/applicationRequest';
import { PaginatedApplicationList } from '../model/paginatedApplicationList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum ApplicationsApiApiKeys {
    tokenAuth = 0
}
export declare class ApplicationsApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        tokenAuth: ApiKeyAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ApplicationsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    applicationsCreate(xAccountToken: string, remoteUserId?: string, runAsync?: boolean, applicationRequest?: ApplicationRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Application;
    }>;
    applicationsList(xAccountToken: string, candidateId?: string, createdAfter?: Date, createdBefore?: Date, creditedToId?: string, currentStageId?: string, cursor?: string, expand?: 'candidate' | 'candidate,credited_to' | 'candidate,credited_to,current_stage' | 'candidate,credited_to,current_stage,reject_reason' | 'candidate,credited_to,reject_reason' | 'candidate,current_stage' | 'candidate,current_stage,reject_reason' | 'candidate,job' | 'candidate,job,credited_to' | 'candidate,job,credited_to,current_stage' | 'candidate,job,credited_to,current_stage,reject_reason' | 'candidate,job,credited_to,reject_reason' | 'candidate,job,current_stage' | 'candidate,job,current_stage,reject_reason' | 'candidate,job,reject_reason' | 'candidate,reject_reason' | 'credited_to' | 'credited_to,current_stage' | 'credited_to,current_stage,reject_reason' | 'credited_to,reject_reason' | 'current_stage' | 'current_stage,reject_reason' | 'job' | 'job,credited_to' | 'job,credited_to,current_stage' | 'job,credited_to,current_stage,reject_reason' | 'job,credited_to,reject_reason' | 'job,current_stage' | 'job,current_stage,reject_reason' | 'job,reject_reason' | 'reject_reason', includeRemoteData?: boolean, jobId?: string, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, rejectReasonId?: string, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedApplicationList;
    }>;
    applicationsRetrieve(xAccountToken: string, id: string, expand?: 'candidate' | 'candidate,credited_to' | 'candidate,credited_to,current_stage' | 'candidate,credited_to,current_stage,reject_reason' | 'candidate,credited_to,reject_reason' | 'candidate,current_stage' | 'candidate,current_stage,reject_reason' | 'candidate,job' | 'candidate,job,credited_to' | 'candidate,job,credited_to,current_stage' | 'candidate,job,credited_to,current_stage,reject_reason' | 'candidate,job,credited_to,reject_reason' | 'candidate,job,current_stage' | 'candidate,job,current_stage,reject_reason' | 'candidate,job,reject_reason' | 'candidate,reject_reason' | 'credited_to' | 'credited_to,current_stage' | 'credited_to,current_stage,reject_reason' | 'credited_to,reject_reason' | 'current_stage' | 'current_stage,reject_reason' | 'job' | 'job,credited_to' | 'job,credited_to,current_stage' | 'job,credited_to,current_stage,reject_reason' | 'job,credited_to,reject_reason' | 'job,current_stage' | 'job,current_stage,reject_reason' | 'job,reject_reason' | 'reject_reason', includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Application;
    }>;
}
