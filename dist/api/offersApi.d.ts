/// <reference types="node" />
import http from 'http';
import { Offer } from '../model/offer';
import { PaginatedOfferList } from '../model/paginatedOfferList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum OffersApiApiKeys {
    tokenAuth = 0
}
export declare class OffersApi {
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
    setApiKey(key: OffersApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    offersList(xAccountToken: string, applicationId?: string, createdAfter?: Date, createdBefore?: Date, creatorId?: string, cursor?: string, expand?: 'application' | 'application,creator' | 'creator', includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedOfferList;
    }>;
    offersRetrieve(xAccountToken: string, id: string, expand?: 'application' | 'application,creator' | 'creator', includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Offer;
    }>;
}
