/// <reference types="node" />
import http from 'http';
import { Department } from '../model/department';
import { PaginatedDepartmentList } from '../model/paginatedDepartmentList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum DepartmentsApiApiKeys {
    tokenAuth = 0
}
export declare class DepartmentsApi {
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
    setApiKey(key: DepartmentsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    departmentsList(xAccountToken: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedDepartmentList;
    }>;
    departmentsRetrieve(xAccountToken: string, id: string, includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Department;
    }>;
}
