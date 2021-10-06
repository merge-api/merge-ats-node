/// <reference types="node" />
import http from 'http';
import { Activity } from '../model/activity';
import { PaginatedActivityList } from '../model/paginatedActivityList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum ActivitiesApiApiKeys {
    tokenAuth = 0
}
export declare class ActivitiesApi {
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
    setApiKey(key: ActivitiesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    activitiesList(xAccountToken: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, expand?: 'user', includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, userId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedActivityList;
    }>;
    activitiesRetrieve(xAccountToken: string, id: string, expand?: 'user', includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Activity;
    }>;
}
