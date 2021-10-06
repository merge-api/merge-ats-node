/// <reference types="node" />
import http from 'http';
import { PaginatedTagList } from '../model/paginatedTagList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum TagsApiApiKeys {
    tokenAuth = 0
}
export declare class TagsApi {
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
    setApiKey(key: TagsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    tagsList(xAccountToken: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedTagList;
    }>;
}
