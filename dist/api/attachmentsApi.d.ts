/// <reference types="node" />
import http from 'http';
import { Attachment } from '../model/attachment';
import { AttachmentEndpointRequest } from '../model/attachmentEndpointRequest';
import { AttachmentResponse } from '../model/attachmentResponse';
import { PaginatedAttachmentList } from '../model/paginatedAttachmentList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum AttachmentsApiApiKeys {
    tokenAuth = 0
}
export declare class AttachmentsApi {
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
    setApiKey(key: AttachmentsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    attachmentsCreate(xAccountToken: string, attachmentEndpointRequest: AttachmentEndpointRequest, runAsync?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AttachmentResponse;
    }>;
    attachmentsList(xAccountToken: string, candidateId?: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, expand?: 'candidate', includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedAttachmentList;
    }>;
    attachmentsRetrieve(xAccountToken: string, id: string, expand?: 'candidate', includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachment;
    }>;
}
