/// <reference types="node" />
import http from 'http';
import { PaginatedRemoteUserList } from '../model/paginatedRemoteUserList';
import { RemoteUser } from '../model/remoteUser';
import { RemoteUserRequest } from '../model/remoteUserRequest';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum UsersApiApiKeys {
    tokenAuth = 0
}
export declare class UsersApi {
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
    setApiKey(key: UsersApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    usersCreate(xAccountToken: string, remoteUserId?: string, runAsync?: boolean, remoteUserRequest?: RemoteUserRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoteUser;
    }>;
    usersList(xAccountToken: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, email?: string, includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedRemoteUserList;
    }>;
    usersRetrieve(xAccountToken: string, id: string, includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoteUser;
    }>;
}
