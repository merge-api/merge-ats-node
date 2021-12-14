/// <reference types="node" />
import http from 'http';
import { Job } from '../model/job';
import { PaginatedJobList } from '../model/paginatedJobList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum JobsApiApiKeys {
    tokenAuth = 0
}
export declare class JobsApi {
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
    setApiKey(key: JobsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    jobsList(xAccountToken: string, code?: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, expand?: 'departments' | 'departments,hiring_managers' | 'departments,offices' | 'departments,offices,hiring_managers' | 'hiring_managers' | 'offices' | 'offices,hiring_managers', includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, status?: 'ARCHIVED' | 'CLOSED' | 'DRAFT' | 'OPEN' | 'PENDING', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedJobList;
    }>;
    jobsRetrieve(xAccountToken: string, id: string, expand?: 'departments' | 'departments,hiring_managers' | 'departments,offices' | 'departments,offices,hiring_managers' | 'hiring_managers' | 'offices' | 'offices,hiring_managers', includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Job;
    }>;
}
