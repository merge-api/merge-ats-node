/// <reference types="node" />
import http from 'http';
import { PaginatedRejectReasonList } from '../model/paginatedRejectReasonList';
import { RejectReason } from '../model/rejectReason';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum RejectReasonsApiApiKeys {
    tokenAuth = 0
}
export declare class RejectReasonsApi {
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
    setApiKey(key: RejectReasonsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    rejectReasonsList(xAccountToken: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedRejectReasonList;
    }>;
    rejectReasonsRetrieve(xAccountToken: string, id: string, includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RejectReason;
    }>;
}
