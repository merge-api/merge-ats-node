/// <reference types="node" />
import http from 'http';
import { JobInterviewStage } from '../model/jobInterviewStage';
import { PaginatedJobInterviewStageList } from '../model/paginatedJobInterviewStageList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum JobInterviewStagesApiApiKeys {
    tokenAuth = 0
}
export declare class JobInterviewStagesApi {
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
    setApiKey(key: JobInterviewStagesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    jobInterviewStagesList(xAccountToken: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, expand?: 'departments' | 'departments,job' | 'departments,offices' | 'departments,offices,job' | 'job' | 'offices' | 'offices,job', includeRemoteData?: boolean, jobId?: string, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedJobInterviewStageList;
    }>;
    jobInterviewStagesRetrieve(xAccountToken: string, id: string, expand?: 'departments' | 'departments,job' | 'departments,offices' | 'departments,offices,job' | 'job' | 'offices' | 'offices,job', includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: JobInterviewStage;
    }>;
}
