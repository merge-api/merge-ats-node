/// <reference types="node" />
import http from 'http';
import { Candidate } from '../model/candidate';
import { CandidateEndpointRequest } from '../model/candidateEndpointRequest';
import { CandidateResponse } from '../model/candidateResponse';
import { PaginatedCandidateList } from '../model/paginatedCandidateList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum CandidatesApiApiKeys {
    tokenAuth = 0
}
export declare class CandidatesApi {
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
    setApiKey(key: CandidatesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    candidatesCreate(xAccountToken: string, candidateEndpointRequest: CandidateEndpointRequest, runAsync?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CandidateResponse;
    }>;
    candidatesList(xAccountToken: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, expand?: 'applications' | 'applications,attachments' | 'attachments', firstName?: string, includeRemoteData?: boolean, lastName?: string, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedCandidateList;
    }>;
    candidatesRetrieve(xAccountToken: string, id: string, expand?: 'applications' | 'applications,attachments' | 'attachments', includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Candidate;
    }>;
}
