/// <reference types="node" />
import http from 'http';
import { EEOC } from '../model/eEOC';
import { PaginatedEEOCList } from '../model/paginatedEEOCList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum EeocsApiApiKeys {
    tokenAuth = 0
}
export declare class EeocsApi {
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
    setApiKey(key: EeocsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    eeocsList(xAccountToken: string, candidateId?: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, expand?: 'candidate', includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedEEOCList;
    }>;
    eeocsRetrieve(xAccountToken: string, id: string, expand?: 'candidate', includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EEOC;
    }>;
}
